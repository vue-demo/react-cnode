import React, {Component} from 'react';
import Header from "../components/Header";
import Aside from "../components/share/Aside";

class Share extends Component {
  render() {
    return (
      <div className="App about">
        <Header/>
        <Aside/>
      </div>
    );
  }
}

export default Share;
