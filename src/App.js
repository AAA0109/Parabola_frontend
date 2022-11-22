import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "Redux@Helpers";
import Signin from './views/signin';
import Signup from './views/signup';
import Home from './views/home';
import Project from './views/project';
import Members from './views/members';
import UpdateObject from './views/updateobject';
import { actions } from './redux/_actions';

function AppContainer() {
  const dispatch = useDispatch();
  const { email } = useSelector(state => state.auth)

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && !email) {
      dispatch(actions.verify(token));
    }
  }, [email, dispatch])

  return (
    <Router>
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/project" exact component={Project} />
        <Route path="/members" exact component={Members} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/updateobject" exact component={UpdateObject} />
      </Switch>
    </Router>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}