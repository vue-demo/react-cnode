import React, {Component} from 'react';
import Header from "../components/Header";
import Aside from "../components/user/Aside";

class All extends Component {
  render() {
    return (
      <div className="App home">
        <Header/>
        <Aside/>
      </div>
    );
  }
}

export default All;
