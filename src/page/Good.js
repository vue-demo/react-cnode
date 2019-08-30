import React, {Component} from 'react';
import Header from "../components/Header";
import Aside from "../components/good/Aside";
import Footer from "../components/Footer";

class Good extends Component {
  render() {
    return (
      <div className="App good">
        <Header match={this.props.match}/>
        <Aside/>
        <Footer match={this.props.match}/>
      </div>
    );
  }
}

export default Good;
