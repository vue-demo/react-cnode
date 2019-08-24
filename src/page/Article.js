import React, {Component} from 'react';
import Header from "../components/Header";
import CArticle from "../components/Article";
import Footer from "../components/Footer";
import Back from "../components/Back";
import Share from "../components/Share";

class Article extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <CArticle data={this.props}/>
        <Footer/>
        <Back/>
        <Share/>
      </div>
    );
  }
}

export default Article;
