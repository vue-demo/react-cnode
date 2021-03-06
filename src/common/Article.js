import React, {Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

class CContent extends Component {
  constructor(props) {
    super(props);

    let id = 0;
    if (props.data && props.data.match.params.id) {
      id = props.data.match.params.id
    }

    this.path = 'https://cnodejs.org/api/v1';
    this.state = {
      id: id,
      list: [],
      article: {},
      isLoaded: false
    }
  }

  getTopics() {
    axios
      .get(this.path + '/topics')
      .then(res => {
        if (res.status === 200) {
          this.setState({
            list: res.data.data,
            isLoaded: true
          })
        }
      })
      .catch(error => {
        this.setState({
          isLoaded: false,
          error: error
        })
      });
  }

  getTopic(id) {
    axios
      .get(this.path + '/topic/' + id)
      .then(res => {
        if (res.status === 200) {
          this.setState({
            article: res.data.data,
            isLoaded: true
          });
        }
      })
      .catch(error => {
        this.setState({
          isLoaded: false,
          error: error
        })
      });
  }

  componentDidMount() {
    this.getTopics();
    this.getTopic(this.state.id);
  }

  render() {
    let list = this.state.list;
    let article = this.state.article;
    console.log(article);
    return (
      <div className="article">
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
      </div>
    );
  }
}

export default CContent;
