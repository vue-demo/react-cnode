import React, {Component} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Aside from "../components/all/Aside";

class All extends Component {
  render() {
    return (
      <div className="App all">
        <Header match={this.props.match}/>
        <Aside/>
        <Footer match={this.props.match}/>
      </div>
    );
  }
}

export default All;