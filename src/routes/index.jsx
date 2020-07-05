import React from 'react';

import { Switch, Route } from "react-router-dom"

import LoginRoute from "./LoginRoute";
import DashBoardRoute from "./DashboardRoute"

function routes() {
  return (
    <Switch>
        <Route exact path="/" component={LoginRoute} />
        <Route path="/dashboard" component={DashBoardRoute} />
    </Switch>
  );
}

export default routes;