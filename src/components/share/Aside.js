import React, {Component} from 'react';
// import {Link} from "react-router-dom";
import {connect} from "react-redux";

import axios from '../../api/axios';
import {List} from 'antd-mobile';
import Loading from "../Loading";

const Item = List.Item;
const Brief = Item.Brief;

class Aside extends Component {
  getTopics() {
    this.props.dispatch((dispatch, getState) => {
      axios
        .get('/topics?tab=share&page=1&limit=10')
        .then(res => {
          if (res.status === 200) {
            dispatch({
              type: "Share_Succ",
              data: res.data.data
            });
          }
        })
        .catch(error => {
          dispatch({
            type: "Share_Error"
          });
        });
    });
  }

  componentDidMount() {
    this.getTopics();
  }

  render() {
    let {data} = this.props;
    console.log('share', data);

    if (JSON.stringify(data) === "{}") {
      return (<div className="container"><Loading/></div>)
    }

    return (
      <div className="container">
        {data.length && data.map((v, index) => (
          <Item align="top" key={index} thumb={v.author.avatar_url}>
            <Brief>{v.last_reply_at} </Brief>
            <Brief>{v.title} </Brief>
          </Item>
        ))}
      </div>
    );
  }
}

export default connect(state => state.share)(Aside);