import React, {Component} from 'react';
import {Link} from "react-router-dom";

class CBack extends Component {
  render() {
    return (
      <div className="channel col-md-1">
        <ul className="channel-nav">
          <li className="active">
            <Link to="/"><span>智能硬件</span></Link>
          </li>
          <li>
            <Link to="/"><span>智慧城市</span></Link>
          </li>
          <li>
            <Link to="/"><span>智能消防</span></Link>
          </li>
          <li>
            <Link to="/"><span>智能交通</span></Link>
          </li>
          <li>
            <Link to="/"><span>智能家居</span></Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default CBack;
