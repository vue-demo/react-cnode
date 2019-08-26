import React, {Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

class Aside extends Component {
  constructor(props) {
    super(props);

    this.path = 'https://cnodejs.org/api/v1';
    this.state = {
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
            list2: res.data.data,
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

  componentDidMount() {
    this.getTopics();
  }

  render() {
    let list = this.state.list;

    return (
      <div className="aside col-md-3">
        <form className="search form-horizontal">
          <div className="input-group">
            <input type="text" className="form-control"/>
            <div className="input-group-btn">
              <button className="btn btn-primary">搜索</button>
            </div>
          </div>
        </form>

        <div className="panel">
          <div className="panel-title">精彩图文</div>
          <div className="list-group">

            {list.filter((v, i) => i > 10 && i < 13).map((v, index) => (
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

        <div className="title">
          <h3>热门排行</h3>
        </div>

        <div className="list">

          {list.filter((v, i) => i > 13 && i < 20).map((v, index) => (
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
    );
  }
}

export default Aside;
