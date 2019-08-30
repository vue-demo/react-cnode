import React, {Component} from 'react';
import {connect} from "react-redux";
import axios from '../../api/axios';
import Loading from "../Loading";
import {List} from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

class Aside extends Component {
  constructor(props) {
    super(props);
    console.log(1);
  }

  componentDidMount() {
    this.getMessages();
    console.log(2);
  }

  componentDidUpdate() {
    console.log(3);
  }

  getMessages() {
    this.props.dispatch((dispatch, getState) => {
      axios
        .get('/messages', {
          params: {
            accesstoken: '846fcf3a-0c2a-4c95-b286-dbf137cfc580'
          }
        })
        .then(res => {
          if (res.status === 200) {
            dispatch({
              type: "Msg_Succ",
              data: res.data.data
            });
          }
        })
        .catch(error => {
          dispatch({
            type: "Msg_Error"
          });
        });
    });
  }

  render() {
    let {msg} = this.props;
    console.log('msg', msg.data);

    if (JSON.stringify(msg.data) === "{}") {
      return (<div className="container"><Loading/></div>)
    }

    let isRead = true;
    let isNotRead = true;
    if (msg.data.has_read_messages && msg.data.has_read_messages.length === 0) {
      isRead = false;
    }
    if (msg.data.hasnot_read_messages && msg.data.hasnot_read_messages.length === 0) {
      isNotRead = false;
    }

    return (
      <div className="container">
        <List renderHeader="未读消息">
          {msg.data.hasnot_read_messages && msg.data.hasnot_read_messages.map((v, index) => (
            <Item key={index} thumb={v.author.avatar_url}>
              <Brief>{v.topic.last_reply_at} </Brief>
              <Brief>{v.topic.title} </Brief>
            </Item>
          ))}
          <Item
            style={{display: isNotRead ? 'none' : 'block'}}>
            <Brief>暂无数据</Brief>
          </Item>
        </List>

        <List renderHeader="已读消息">
          {msg.data.has_read_messages && msg.data.has_read_messages.map((v, index) => (
            <Item key={index} thumb={v.author.avatar_url}>
              <Brief>{v.topic.last_reply_at} </Brief>
              <Brief>{v.topic.title} </Brief>
            </Item>
          ))}
          <Item
            style={{display: isRead ? 'none' : 'block'}}>
            <Brief>暂无数据</Brief>
          </Item>
        </List>
      </div>
    );
  }
}

export default connect(state => {
  let {msg} = state;
  return {msg}
})(Aside);