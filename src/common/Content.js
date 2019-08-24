import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Content extends Component {
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
      <div className="content col-md-8">
        <div className="slide">
          <div className="slide-item"><img src={require("../img/pic-02.jpg")} alt="aaaaaaa"/></div>
        </div>
        <div className="items">

          {list.filter((v,i)=>i<10).map((item, index) => (
            <div className="item" key={index}>
              <div className="item-pic">
                <Link to={{
                  pathname: '/topic/' + item.id,
                  search: '?sort=id',
                  state: {id: item.id}
                }}> <img src={item.author.avatar_url} alt="aaaaaaa"/> </Link>
              </div>
              <div className="item-intro">
                <Link to={{
                  pathname: '/topic/' + item.id,
                  search: '?sort=id',
                  state: {id: item.id}
                }}>{item.title}</Link>
                <p>{item.title}</p>
              </div>
              <div className="item-info">{item.last_reply_at}</div>
            </div>
          ))}

        </div>
      </div>
    );
  }
}

export default Content;
