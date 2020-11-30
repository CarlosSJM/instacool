import React from "react";
import "./App.css";
import { Route, Switch } from "react-router";
import Login from "./containers/Auth/Login";
import Register from "./containers/Auth/Register";

class App extends React.Component {
  public render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    );
  }
}

export default App;
