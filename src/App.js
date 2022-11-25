import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route
} from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "Redux@Helpers";
import Signin from './views/signin';
import Signup from './views/signup';
import {AuthProvider} from './Auth';
import Home from './views/home';
import Project from './views/project';
import Members from './views/members';
import Auth from './views/auth';
import UpdateObject from './views/updateobject';

function AppContainer() {
  
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Signin} />
          <Route path="/auth" exact component={Auth} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/home" exact component={Home} />
          <Route path="/project" exact component={Project} />
          <Route path="/members" exact component={Members} />
          <Route path="/updateobject" exact component={UpdateObject} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}