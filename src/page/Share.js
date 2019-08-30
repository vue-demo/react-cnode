import React, {Component} from 'react';
import Header from "../components/Header";
import Aside from "../components/share/Aside";
import Footer from "../components/Footer";

class Share extends Component {
  render() {
    return (
      <div className="App share">
        <Header match={this.props.match}/>
        <Aside/>
        <Footer match={this.props.match}/>
      </div>
    );
  }
}

export default Share;
