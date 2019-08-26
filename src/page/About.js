import React, {Component} from 'react';
import Header from "../components/Header";
import Container from "../components/about/Container";
import Footer from "../components/Footer";
import Back from "../components/Back";

class Home extends Component {
  render() {
    return (
      <div className="App about">
        <Header/>
        <Container/>
        <Footer/>
        <Back/>
      </div>
    );
  }
}

export default Home;
