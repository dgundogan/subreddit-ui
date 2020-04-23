import React, { Fragment } from "react";
import "./App.css";
import Search from "./components/search/search.component";
import Header from "./components/header/header.component";

const App = () => (
  <Fragment>
      <Header />
      <Search />
  </Fragment>
);

export default App;
