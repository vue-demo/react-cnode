import React, {Component, lazy} from "react";
import {Switch, Route, Redirect} from 'react-router-dom';

// page
const Home = lazy(() => import('../page/Home'));
const Article = lazy(() => import('../page/Article'));
const About = lazy(() => import('../page/About'));

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/about" component={About}/>
        <Route exact path="/topic/:id" component={Article}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/" component={Home}/>
        <Redirect from={"*"} to={'/'}/>
      </Switch>
    )
  }
}
