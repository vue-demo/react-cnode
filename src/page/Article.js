import React, {Component} from 'react';
import Header from "../common/Header";
import CArticle from "../common/Article";
import Footer from "../common/Footer";
import Back from "../common/Back";
import Share from "../common/Share";

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
