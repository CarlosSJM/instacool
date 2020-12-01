import React from "react";
import "./App.css";
import { Route, Switch } from "react-router";
import Login from "./containers/Auth/Login";
import Register from "./containers/Auth/Register";
import NewsFeed from "./containers/NewsFeed/index";
import Navbar from "./components/Navbar";
class App extends React.Component {
  public render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route path="/app">
          <Route path="/app" component={Navbar} />
          <Route exact path="/app/newsfeed" component={NewsFeed} />
        </Route>
      </Switch>
    );
  }
}

export default App;
