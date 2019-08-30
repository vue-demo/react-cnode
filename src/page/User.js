import React, {Component} from 'react';
import Aside from "../components/user/Aside";
import Footer from "../components/Footer";

class All extends Component {
  render() {
    return (
      <div className="App user">
        <Aside/>
        <Footer match={this.props.match}/>
      </div>
    );
  }
}

export default All;