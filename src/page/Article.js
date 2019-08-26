import React, {Component} from 'react';
import Header from "../components/Header";
import Container from "../components/article/Container";
import Footer from "../components/Footer";
import Back from "../components/Back";
import Share from "../components/Share";

class Article extends Component {
  render() {
    return (
      <div className="App article">
        <Header/>
        <Container data={this.props}/>
        <Footer/>
        <Back/>
        <Share/>
      </div>
    );
  }
}

export default Article;
