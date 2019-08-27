import React, {Component} from 'react';
import Header from "../components/Header";
import Aside from "../components/article/Aside";
import Footer from "../components/Footer";

class Article extends Component {
  render() {
    return (
      <div className="App article">
        <Header/>
        <Aside data={this.props}/>
        <Footer/>
      </div>
    );
  }
}

export default Article;
