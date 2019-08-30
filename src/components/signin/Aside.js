import React, {Component} from 'react';
// import {Link} from "react-router-dom";
import {connect} from "react-redux";

import axios from '../../api/axios';
import {List} from 'antd-mobile';
import Loading from "../Loading";

const Item = List.Item;
const Brief = Item.Brief;

class Aside extends Component {
  getTopics(name, token) {
    let username = name ? name : 'vmto';
    let accessToken = token ? token : 'd2cb9054-15f9-4760-be1a-0f53c4287111';
    this.props.dispatch((dispatch, getState) => {
      axios
        .get('/user/' + username, {
          params: {
            accessToken: accessToken
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
    this.getTopics();
  }

  render() {
    let {data} = this.props;
    console.log('signin', data);

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

export default connect(state => state.signin)(Aside);