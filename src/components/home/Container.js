import React, {Component} from 'react';
import Channel from './Channel';
import Content from './Content';
import Aside from './Aside';

class Container extends Component {
  render() {
    return (
      <div className="container">
        <Channel/>
        <Content/>
        <Aside/>
      </div>
    );
  }
}

export default Container;
