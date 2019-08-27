import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <ul className="nav">
          <li className="active"><Link to="/">首页</Link></li>
          <li><Link to="/">产品中心</Link></li>
          <li><Link to="/">新闻动态</Link></li>
          <li><Link to="/">行业资讯</Link></li>
          <li><Link to="/">荣誉资质</Link></li>
          <li><Link to="/">人才招聘</Link></li>
          <li><Link to="/about">关于润缘</Link></li>
        </ul>
      </div>
    );
  }
}

export default Header;
