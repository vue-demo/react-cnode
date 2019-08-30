import React, {Component} from 'react';
import Header from "../components/Header";

// import axios from '../../api/axios';

class Detail extends Component {
  render() {
    return (
      <div className="App all">
        <Header match={this.props.match}/>
        <div>
          <p>Detail</p>
          <p>Detail</p>
        </div>
      </div>
    );
  }
}

export default Detail;
