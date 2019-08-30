import React, {Component} from 'react';
import axios from '../../api/axios';
import {connect} from "react-redux";
// import {Link} from "react-router-dom";
// import {List} from 'antd-mobile';
// const Item = List.Item;
// const Brief = Item.Brief;

class Aside extends Component {
  getMessages() {
    this.props.dispatch((dispatch, getState) => {
      dispatch({
        type: "Msg_Updata"
      });

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
              data: res.data
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

  getMessage() {
    this.props.dispatch((dispatch, getState) => {
      dispatch({
        type: "Msg_count_Updata"
      });

      axios
        .get('/message/count', {
          params: {
            accesstoken: '846fcf3a-0c2a-4c95-b286-dbf137cfc580'
          }
        })
        .then(res => {
          if (res.status === 200) {
            dispatch({
              type: "Msg_count_Succ",
              data: res.data
            });
          }
        })
        .catch(error => {
          dispatch({
            type: "Msg_count_Error"
          });
        });
    });
  }

  componentDidMount() {
    this.getMessage();
    this.getMessages();
  }

  render() {
    let {msg, count} = this.props;
    console.log('msg', msg);
    console.log('count', count);

    if (JSON.stringify(msg) === "{}" || JSON.stringify(count) === "{}") {
      return (<div>暂无数据~</div>)
    }

    return (
      <div className="container">
        <p>{msg.data.has_read_messages}</p>
        <p>{msg.data.hasnot_read_messages}</p>
        <p>{count.data}</p>
      </div>
    );
  }
}

export default connect(state => state.msg)(Aside);