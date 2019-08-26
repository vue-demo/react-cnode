import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">

          <nav className="navbar navbar-default" role="navigation">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#menu">
                <span className="sr-only">展开导航</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to="/" className="navbar-brand">润缘控股</Link>
            </div>
            <div className="collapse navbar-collapse" id="menu">
              <ul className="nav navbar-nav">
                <li className="active"><Link to="/">首页</Link></li>
                <li><Link to="/">产品中心</Link></li>
                <li><Link to="/">新闻动态</Link></li>
                <li><Link to="/">行业资讯</Link></li>
                <li><Link to="/">荣誉资质</Link></li>
                <li><Link to="/">人才招聘</Link></li>
                <li><Link to="/about">关于润缘</Link></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
