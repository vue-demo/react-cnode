import React, {Component, lazy} from "react";
import {Switch, Route, Redirect} from 'react-router-dom';

// page
const All = lazy(() => import('../page/All'));
const Good = lazy(() => import('../page/Good'));
const Share = lazy(() => import('../page/Share'));
const Ask = lazy(() => import('../page/Ask'));
const User = lazy(() => import('../page/User'));

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/user" component={User}/>
        <Route exact path="/ask" component={Ask}/>
        <Route exact path="/share" component={Share}/>
        <Route exact path="/good" component={Good}/>
        <Route exact path="/all" component={All}/>
        <Route exact path="/" component={All}/>
        <Redirect from={"*"} to={'/'}/>
      </Switch>
    )
  }
}
