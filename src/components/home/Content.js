import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Content extends Component {
  render() {
    const {list} = this.props;
    console.log(list);
    return (
      <div className="content col-md-8">
        <div className="slide">
          <div className="slide-item"><img src={require("../../assets/pic-02.jpg")} alt="aaaaaaa"/></div>
        </div>
        <div className="items">

          {list.data.length && list.data.map((item, index) => (
            <div className="item" key={index}>
              <div className="item-pic">
                <Link to={{
                  pathname: '/topic/' + item.id,
                  search: '?sort=id',
                  state: {id: item.id}
                }}> <img src={item.author.avatar_url} alt="aaaaaaa"/> </Link>
              </div>
              <div className="item-intro">
                <Link to={{
                  pathname: '/topic/' + item.id,
                  search: '?sort=id',
                  state: {id: item.id}
                }}>{item.title}</Link>
                <p>{item.title}</p>
              </div>
              <div className="item-info">{item.last_reply_at}</div>
            </div>
          ))}

        </div>
      </div>
    );
  }
}

export default Content;
