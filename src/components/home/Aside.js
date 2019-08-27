import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import axios from '../../api/axios';

class Aside extends Component {
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
    const {list} = this.props;
    return (
      <div className="container">
        {list.data.length && list.data.filter((v, i) => i > 10 && i < 13).map((v, index) => (
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

        {list.data.length && list.data.filter((v, i) => i > 13 && i < 20).map((v, index) => (
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
    );
  }
}

export default connect(state => {
  return {
    list: state.list
  }
})(Aside);