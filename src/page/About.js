import React, {Component} from 'react';
import Header from "../components/Header";
import Aside from "../components/about/Aside";
import Footer from "../components/Footer";

class Home extends Component {
  render() {
    return (
      <div className="App about">
        <Header/>
        <Aside/>
        <Footer/>
      </div>
    );
  }
}

export default Home;
