import React, {Component} from 'react';
// import {Link} from "react-router-dom";
import {connect} from "react-redux";

import axios from '../../api/axios';
import {List} from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

class Aside extends Component {
  getTopics() {
    this.props.dispatch((dispatch, getState) => {
      dispatch({
        type: "Good_Updata"
      });

      axios
        .get('/topics?tab=good&page=1&limit=10')
        .then(res => {
          if (res.status === 200) {
            dispatch({
              type: "Good_Succ",
              data: res.data.data
            });
          }
        })
        .catch(error => {
          dispatch({
            type: "Good_Error"
          });
        });
    });
  }

  componentDidMount() {
    this.getTopics();
  }

  render() {
    let {data} = this.props;
    console.log('good', data);

    if (JSON.stringify(data) === "{}") {
      return (<div>暂无数据~</div>)
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

export default connect(state => state.good)(Aside);