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
})(Aside);
