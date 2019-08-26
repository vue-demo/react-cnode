import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import axios from '../../api/axios';

class Content extends Component {
  constructor(...arg) {
    super(...arg);


    console.log(this.props);

    let id = 0;
    if (this.props && this.props.data && this.props.data.match.params.id) {
      id = this.props.data.match.params.id
    }

    this.state = {
      id: id,
      list: [],
      article: {},
      isLoaded: false
    }
  }

  getTopics() {
    this.props.dispatch((dispatch, getState) => {
      dispatch({
        type: "TOPLIST_UPDATA"
      });
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
      dispatch({
        type: "Article_UPDATA"
      });
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
    this.getTopic(this.state.id);
  }

  render() {
    let {list, article} = this.state;
    console.log(this.props);
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

                {list.filter((v, i) => i > 10 && i < 15).map((v, index) => (
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

                {list.filter((v, i) => i > 15 && i < 20).map((v, index) => (
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

export default connect(state => state.article)(Content);