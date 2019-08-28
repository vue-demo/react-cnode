import React, {Component} from 'react';
import Header from "../components/Header";
import Aside from "../components/good/Aside";

class Good extends Component {
  render() {
    return (
      <div className="App article">
        <Header/>
        <Aside data={this.props}/>
      </div>
    );
  }
}

export default Good;
