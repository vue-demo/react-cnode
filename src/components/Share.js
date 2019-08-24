import React, {Component} from 'react';

class Share extends Component {
  render() {
    return (
      <div className="share">
        <a href="#/" className="qzone" style={{backgroundImage: `url(${require("../assets/bg_share.png")})`}}>.</a>
        <a href="#/" className="sina" style={{backgroundImage: `url(${require("../assets/bg_share.png")})`}}>.</a>
        <a href="#/" className="weixin" style={{backgroundImage: `url(${require("../assets/bg_share.png")})`}}>.</a>
      </div>
    );
  }
}

export default Share;
