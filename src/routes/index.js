import React, {Suspense} from "react";
import {Provider} from "react-redux";
import {BrowserRouter} from 'react-router-dom';

import store from "../store";
import Routes from "./routes";

export default () => (
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={'Loading'}>
        <Routes/>
      </Suspense>
    </BrowserRouter>
  </Provider>
);