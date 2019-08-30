import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import axios from '../../api/axios';

class Container extends Component {
  getTopics() {
    this.props.dispatch((dispatch, getState) => {
      axios
        .get('/topics')
        .then(res => {
          if (res.status === 200) {
            dispatch({
              type: "TOPLIST_SUCC",
              data: res.data.data
            });
          }
        })
        .catch(error => {
          dispatch({
            type: "TOPLIST_ERROR"
          });
        });
    });
  }

  componentDidMount() {
    this.getTopics();
  }

  render() {
    let {state} = this.props;

    // console.log(state.list.data);
    // console.log(state.about.data);

    if (JSON.stringify(state.list.data) === "{}") {
      return (<div className="container">
        <div className="row">
          <div className="col-md-9 col-xs-12"></div>
          <div className="col-md-3 col-xs-12"></div>
        </div>
      </div>)
    }

    return (
      <div className="container">
        <div className="row">

          <div className="col-md-9 col-xs-12">
            <div className="content">

              <h1>关于我们</h1>

              <div className="article-info">
                <span>2019-09-09</span>
                <span className="black">张三</span>
                <span>阅读 1999</span>
              </div>

              <div className="article-body">
                <p>welcome ~</p>
              </div>

            </div>
          </div>

          <div className="col-md-3 col-xs-12">
            <div className="aside">
              <div className="title">
                <h3>热门排行</h3>
              </div>

              <div className="list">

                {state.list.data.filter((v, i) => i > 10 && i < 15).map((v, index) => (
                  <div className="item" key={index}>
                    <div className="item-img">
                      <Link to="/">
                        <div className="img-cell" style={{backgroundImage: `url(${v.author.avatar_url})`}}/>
                      </Link>
                    </div>
                    <div className="item-intro">
                      <Link to="/">{v.title}</Link>
                    </div>
                    <div className="item-time">{v.last_reply_at}</div>
                  </div>
                ))}

              </div>
            </div>

            <div className="panel">
              <div className="panel-title">精彩图文</div>
              <div className="list-group">

                {state.list.data.filter((v, i) => i > 15 && i < 20).map((v, index) => (
                  <div className="img-wrap" key={index}>
                    <Link to="/">
                      <div className="img-cell" style={{backgroundImage: `url(${v.author.avatar_url})`}}/>
                      <div className="img-info">
                        <p>{v.title}</p>
                      </div>
                    </Link>
                  </div>
                ))}

              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default connect(state => {
  return {
    state: {
      list: state.list,
      about: state.about
    }
  }
})(Container);
