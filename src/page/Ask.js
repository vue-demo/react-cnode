import React, {Component} from 'react';
import Header from "../components/Header";
import Aside from "../components/ask/Aside";
import Footer from "../components/Footer";

class Ask extends Component {
  render() {
    return (
      <div className="App ask">
        <Header match={this.props.match}/>
        <Aside/>
        <Footer match={this.props.match}/>
      </div>
    );
  }
}

export default Ask;
