import React, { Component } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Sidebar } from "./components/Sidebar";
import { SubHeader } from "./components/SubHeader";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <div>
        <Header />
        <SubHeader />
        <Sidebar/>
        <Main />
      </div>
    );
  }
}
