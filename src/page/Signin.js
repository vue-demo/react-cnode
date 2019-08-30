import React, {Component} from 'react';
import Header from "../components/Header";
import Aside from "../components/signin/Aside";

class All extends Component {
  render() {
    return (
      <div className="App signin">
        <Header match={this.props.match}/>
        <Aside/>
      </div>
    );
  }
}

export default All;
