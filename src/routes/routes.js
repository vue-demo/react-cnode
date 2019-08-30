import React, {Component, lazy} from "react";
import {Switch, Route, Redirect} from 'react-router-dom';

// page
const All = lazy(() => import('../page/All'));
const Good = lazy(() => import('../page/Good'));
const Share = lazy(() => import('../page/Share'));
const Ask = lazy(() => import('../page/Ask'));
const Detail = lazy(() => import('../page/Detail'));
const Publish = lazy(() => import('../page/Publish'));
const Msg = lazy(() => import('../page/Msg'));
const User = lazy(() => import('../page/User'));

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/all" component={All}/>
        <Route exact path="/good" component={Good}/>
        <Route exact path="/share" component={Share}/>
        <Route exact path="/ask" component={Ask}/>
        <Route exact path="/detail/:id" component={Detail}/>
        <Route exact path="/publish" component={Publish}/>
        <Route exact path="/msg" component={Msg}/>
        <Route exact path="/user" component={User}/>
        <Route exact path="/" component={All}/>
        <Redirect from={"*"} to={'/'}/>
      </Switch>
    )
  }
}
