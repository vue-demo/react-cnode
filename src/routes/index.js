import React, {Component, Suspense} from "react";
import {Provider} from "react-redux";
import {BrowserRouter} from 'react-router-dom';

import store from "../store";
import Routes from "./routes";
import Loading from "../components/Loading";

export default () => (
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={<Loading/>}>
        <Routes/>
      </Suspense>
    </BrowserRouter>
  </Provider>
);