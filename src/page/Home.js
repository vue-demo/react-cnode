import React, {Component} from 'react';
import Header from "../components/Header";
import Aside from "../components/home/Aside";
import Footer from "../components/Footer";

class Home extends Component {
  render() {
    return (
      <div className="App home">
        <Header/>
        <Aside/>
        <Footer/>
      </div>
    );
  }
}

export default Home;
