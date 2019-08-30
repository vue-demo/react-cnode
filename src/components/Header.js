import React, {Component} from 'react';
import {Link} from "react-router-dom";

// import axios from '../../api/axios';
import {NavBar, Icon} from 'antd-mobile';

const data = [
  {
    label: '全部',
    value: '/all',
  }, {
    label: '精品',
    value: '/good',
  },
  {
    label: '分享',
    value: '/share',
  },
  {
    label: '问答',
    value: '/ask',
  }
];

class NavMenu extends Component {
  render() {
    let {match} = this.props;

    return (
      <div className={'header'}>
        <NavBar
          mode="dark"
          leftContent={[<Icon key="1" type="ellipsis"/>]}
          rightContent={[
            <Icon key="0" type="search" style={{marginRight: '16px'}}/>
          ]}>润缘控股</NavBar>
        <div className="nav">
          {data.map((v, i) => (
            <Link className={v.value === match.path ? 'active' : ''} key={i} to={v.value}>{v.label}</Link>
          ))}
        </div>
      </div>
    );
  }
}

export default NavMenu;
