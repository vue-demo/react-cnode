import React, {Component} from 'react';
import {connect} from "react-redux";
import axios from '../../api/axios';

// import {Link} from "react-router-dom";
import {List} from 'antd-mobile';
import Loading from "../Loading";

const Item = List.Item;
const Brief = Item.Brief;

class Aside extends Component {

  getTopics() {
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
              type: "Publish_Succ",
              data: res.data.data
            });
          }
        })
        .catch(error => {
          dispatch({
            type: "Publish_Error"
          });
        });
    });
  }

  componentDidMount() {
    this.getTopics();
  }

  render() {
    let {data} = this.props;
    console.log('publish', this.props);

    if (JSON.stringify(data) === "{}") {
      return (<div className="container"><Loading/></div>)
    }

    return (
      <div className="container">
        {data.has_read_messages.map((v, index) => (
          <Item align="top" key={index} thumb={v.author.avatar_url}>
            <Brief>{v.topic.last_reply_at} </Brief>
            <Brief>{v.topic.title} </Brief>
          </Item>
        ))}
      </div>
    );
  }
}

export default connect(state => state.publish)(Aside);