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

  getTopic(id) {
    this.props.dispatch((dispatch, getState) => {
      axios
        .get('/topic/' + id)
        .then(res => {
          if (res.status === 200) {
            dispatch({
              type: "Article_SUCC",
              data: res.data.data
            });
          }
        })
        .catch(error => {
          dispatch({
            type: "Article_ERROR"
          });
        });
    });
  }

  componentDidMount() {
    this.getTopics();
    this.getTopic(this.props.data.match.params.id);
  }

  render() {
    let {state} = this.props;
    let article = state.article.data;

    // console.log(state.list.data);
    // console.log(state.article.data);

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

              <h1>{article.title}</h1>

              <div className="article-info">
                <span>{article.last_reply_at}</span>
                <span className="black">{article.author && article.author.loginname}</span>
                <span>阅读 {article.visit_count}</span>
              </div>

              <div className="article-body" dangerouslySetInnerHTML={{__html: article.content}}/>

            </div>
          </div>

          <div className="col-md-3 col-xs-12">
            <div className="aside">
              <div className="title">
                <h3>热门排行</h3>
              </div>

              <div className="list">

                {state.list.data.length && state.list.data.filter((v, i) => i > 10 && i < 15).map((v, index) => (
                  <div className="item" key={index}>
                    <div className="item-img">
                      <Link to={{
                        pathname: '/topic/' + v.id,
                        state: {id: v.id}
                      }}>
                        <div className="img-cell" style={{backgroundImage: `url(${v.author.avatar_url})`}}/>
                      </Link>
                    </div>
                    <div className="item-intro">
                      <Link to={{
                        pathname: '/topic/' + v.id,
                        state: {id: v.id}
                      }}>{v.title}</Link>
                    </div>
                    <div className="item-time">{v.last_reply_at}</div>
                  </div>
                ))}

              </div>
            </div>

            <div className="panel">
              <div className="panel-title">精彩图文</div>
              <div className="list-group">

                {state.list.data.length && state.list.data.filter((v, i) => i > 15 && i < 20).map((v, index) => (
                  <div className="img-wrap" key={index}>
                    <Link to={{
                      pathname: '/topic/' + v.id,
                      state: {id: v.id}
                    }}>
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
      article: state.article,
    }
  }
})(Container);