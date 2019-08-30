import React, {Component} from 'react';
import Aside from "../components/publish/Aside";
import Footer from "../components/Footer";

class Publish extends Component {
  render() {
    return (
      <div className="App publish">
        <Aside/>
        <Footer match={this.props.match}/>
      </div>
    );
  }
}

export default Publish;
