import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "../../widgets/Header";
import Main from "../Main";
import GetFilms from "../../httpRequests/GetFilms";
import "./app-styles.scss";

const App = () => {
  useEffect(() => {
    GetFilms().then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <>
      <Header />
      <Switch>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </>
  );
};

export default App;
