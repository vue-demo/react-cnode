import React, {Component} from 'react';
import Channel from './Channel';
import Content from './Content';
import Aside from './Aside';

class Container extends Component {
  render() {
    return (
      <div className="home">
        <div className="container">
          <Channel/>
          <Content/>
          <Aside/>
        </div>
      </div>
    );
  }
}

export default Container;
