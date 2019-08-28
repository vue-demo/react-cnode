import React, {Component} from 'react';
import Header from "../components/Header";
import Aside from "../components/ask/Aside";

class Ask extends Component {
  render() {
    return (
      <div className="App home">
        <Header/>
        <Aside/>
      </div>
    );
  }
}

export default Ask;
