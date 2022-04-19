import React from "react";
import { DashBoard } from "../pages";
import { Route, withRouter, Switch, Router } from "react-router-dom";
import { Login } from "../pages/auth/login";
import Header from "../Components/Header";

export const MainRouter = withRouter(({}) => {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/app/home" component={DashBoard} />
        </Switch>
      </Router>
    </>
  );
});
