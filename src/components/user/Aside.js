import React, {Component} from 'react';
// import {Link} from "react-router-dom";
import {connect} from "react-redux";

import axios from '../../api/axios';
import {Card, List} from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

class Aside extends Component {
  getTopics() {
    this.props.dispatch((dispatch, getState) => {
      axios
        .get('/user/vmto', {
          params: {
            accessToken: 'd2cb9054-15f9-4760-be1a-0f53c4287111'
          }
        })
        .then(res => {
          if (res.status === 200) {
            dispatch({
              type: "Success_Login",
              data: res.data.data
            });
          }
        })
        .catch(error => {
          dispatch({
            type: "Fall_Login"
          });
        });
    });
  }

  componentDidMount() {
    console.log(1);
    this.getTopics();
  }

  shouldComponentUpdate() {
    console.log(2);
    return true
  }

  render() {
    let {data} = this.props;
    console.log('user', data && data);

    if (JSON.stringify(data) === "{}") {
      return (<div>暂无数据~</div>)
    }

    return (<div className="container">
      <Card>
        <Card.Header
          thumbStyle={{width: 60}}
          thumb={data && data.avatar_url}
          extra={<div style={{lineHeight: '30px'}}>
            <div>{data && data.loginname}</div>
            <div>{data && data.create_at.split("T")[0]}</div>
          </div>}
        />
      </Card>

      <List renderHeader="最近创建的话题">
        {data && data.recent_topics && data.recent_topics.map((v, index) => (
          <Item align="top" key={index} thumb={v.author.avatar_url}>
            <Brief>{v.last_reply_at} </Brief>
            <Brief>{v.title} </Brief>
          </Item>
        ))}
      </List>

      <List renderHeader="最近参与的话题">
        {data && data.recent_replies && data.recent_replies.map((v, index) => (
          <Item align="top" key={index} thumb={v.author.avatar_url}>
            <Brief>{v.last_reply_at} </Brief>
            <Brief>{v.title} </Brief>
          </Item>
        ))}
      </List>
    </div>);
  }
}

export default connect(state => state.user)(Aside);