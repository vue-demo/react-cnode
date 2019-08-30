import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Icon} from 'antd-mobile';

const data = [
  {
    label: '首页',
    value: '/all',
  }, {
    label: '发布',
    value: '/publish',
  },
  {
    label: '消息',
    value: '/msg',
  },
  {
    label: '我的',
    value: '/user',
  }
];

class Footer extends Component {
  render() {
    let {match} = this.props;
    console.log(match);
    return (
      <div className="footer">
        <div className="menu">
          <ul>
            {data.map((v, i) => (
              <li className={v.value === match.path ? 'active' : ''} key={i}>
                <Link to={v.value}>
                  <span><Icon type="check-circle"/></span>
                  <span className="am-label">{v.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
