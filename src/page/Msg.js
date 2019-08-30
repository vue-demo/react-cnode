import React, {Component} from 'react';
import Aside from "../components/msg/Aside";
import Footer from "../components/Footer";

class Msg extends Component {
  render() {
    return (
      <div className="App msg">
        <Aside/>
        <Footer match={this.props.match}/>
      </div>
    );
  }
}

export default Msg;
