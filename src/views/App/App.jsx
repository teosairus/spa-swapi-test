import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../../widgets/Header";
import Main from "../Main";

import "./app-styles.scss";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Switch>
        <Route path="/people">
          <Main page="people" />
        </Route>
        <Route path="/">
          <Main page="films" />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
