import React from "react";
import { createBrowserHistory, History } from "history";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Router } from "react-router";
import { BrowserRouter } from "react-router-dom";

const history: History = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
