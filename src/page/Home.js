import React, {Component} from 'react';
import Header from "../common/Header";
import Container from "../common/Container";
import Footer from "../common/Footer";
import Back from "../common/Back";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Container/>
        <Footer/>
        <Back/>
      </div>
    );
  }
}

export default Home;
