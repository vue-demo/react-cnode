import React, {Component} from 'react';
import axios from '../../api/axios';
import {connect} from "react-redux";
import {List} from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

class ListDiv extends Component {
  getTopics(tabs) {
    this.props.dispatch((dispatch, getState) => {
      dispatch({
        type: "TOPLIST_UPDATA"
      });

      axios
        .get(`/topics?tab=${tabs.tab}&page=1&limit=5`)
        .then(res => {
          if (res.status === 200) {
            dispatch({
              type: "TOPLIST_SUCC",
              data: res.data
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
    console.log(this.props.tabs);
    this.getTopics(this.props.tabs);
  }

  render() {
    let {state} = this.props;

    // console.log(state.about.data);

    if (JSON.stringify(state.list.data) === "{}") {
      return (<div>暂无数据~</div>)
    }

    console.log(state.list.data);
    return (<List>
      {state.list.data.filter((v, i) => i > 10 && i < 20).map((v, index) => (
        <Item align="top" key={index} thumb={v.author.avatar_url}>
          {v.title} <Brief>{v.last_reply_at}</Brief>
        </Item>
      ))}
    </List>);
  }
}

export default connect(state => {
  return {
    state: {
      list: state.list,
      about: state.about
    }
  }
})(ListDiv);
