import React, {Component} from 'react';
import axios from "../../api/axios";
import {connect} from "react-redux";

import Channel from './Channel';
import Content from './Content';
import Aside from './Aside';

class Container extends Component {
  getTopics() {
    this.props.dispatch((dispatch, getState) => {
      axios.get('/topics?tab=good&page=1&limit=10')
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
        <Channel/>
        <Content list={list}/>
        <Aside list={list}/>
      </div>
    );
  }
}

export default connect(state => {
  return {
    list: state.list
  }
})(Container);