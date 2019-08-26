import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import axios from '../../api/axios';

class Content extends Component {
  getTopics() {
    this.props.dispatch((dispatch, getState) => {
      dispatch({
        type: "TOPLIST_UPDATA"
      });

      axios.get('/topics')
        .then(res => {
          if (res.status === 200) {
            dispatch({
              type: "TOPLIST_SUCC",
              data: res.data.data
            });
          }
        })
        .catch(res => {
          dispatch({
            type: "TOPLIST_ERROR"
          });
        })
    });
  }

  componentDidMount() {
    this.getTopics();
  }

  render() {
    const {data} = this.props;
    return (
      <div className="content col-md-8">
        <div className="slide">
          <div className="slide-item"><img src={require("../../assets/pic-02.jpg")} alt="aaaaaaa"/></div>
        </div>
        <div className="items">

          {data.length && data.filter((v, i) => i < 10).map((item, index) => (
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

export default connect(state => state.list)(Content);
