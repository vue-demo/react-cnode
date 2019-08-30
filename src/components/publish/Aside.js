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
        type: "All_Updata"
      });

      axios
        .get('/message', {
          params: {
            accessToken: 'd2cb9054-15f9-4760-be1a-0f53c4287111'
          }
        })
        .then(res => {
          if (res.status === 200) {
            dispatch({
              type: "All_Succ",
              data: res.data.data
            });
          }
        })
        .catch(error => {
          dispatch({
            type: "All_Error"
          });
        });
    });
  }

  componentDidMount() {
    this.getTopics();
  }

  render() {
    let {data} = this.props;
    console.log('all', data);

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

export default connect(state => state.all)(Aside);