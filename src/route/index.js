import React from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import Home from '../page/Home';
import Article from '../page/Article';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/topic/:id" component={Article}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/" component={Home}/>
      <Redirect from={"*"} to={'/'}/>
    </Switch>
  </Router>
);