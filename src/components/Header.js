import React, {Component} from 'react';
import {Link} from "react-router-dom";
// import axios from '../../api/axios';

const data = [
  {
    label: '全部',
    value: 'all',
  }, {
    label: '精品',
    value: 'good',
  },
  {
    label: '分享',
    value: 'share',
  },
  {
    label: '问答',
    value: 'ask',
  },
  {
    label: '我的',
    value: 'me',
  }
];

class NavMenu extends Component {
  constructor(...args) {
    super(...args);
  }

  render() {
    let active = this.props.active;
    console.log(active);
    return (
      <div className={'header'}>
        {data.map((v, i) => (<Link className={active} key={i} to={v.value}>{v.label}</Link>))}
      </div>
    );
  }
}

export default NavMenu;
