import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Ville from "./Ville";
import Header from "../Components/Header";

function Layout() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/ville/:ville" component={Ville} />
      </Switch>
    </div>
  );
}

export default Layout;
