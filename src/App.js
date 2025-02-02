import React from "react";
import "./styles.css";
import "./styles/tailwind-pre-build.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StoriesComponent from "./components/StoriesComponent";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={StoriesComponent} />
        </Switch>
      </div>
    </Router>
  );
}
