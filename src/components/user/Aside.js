import React, {Component} from 'react';
import {connect} from "react-redux";
import axios from '../../api/axios';
import Loading from "../Loading";
import {Card, List} from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

class Aside extends Component {
  constructor(props) {
    super(props);
    console.log(1);
  }

  componentDidMount() {
    this.getTopics();
    console.log(2);
  }

  componentDidUpdate() {
    console.log(3);
  }

  getTopics() {
    this.props.dispatch((dispatch, getState) => {
        axios
          .get('/user/vmto', {
            params: {accesstoken: '846fcf3a-0c2a-4c95-b286-dbf137cfc580'}
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
      }
    )
    ;
  }

  render() {
    let {data} = this.props;

    if (JSON.stringify(data) === "{}") {
      return (<div className="container"><Loading/></div>)
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