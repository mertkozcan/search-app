import React, { Component, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import SubHeader from "./components/SubHeader";

const App = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearchText = (search) => {
    setSearchText(search);
  };

  return (
    <div>
      <Header handleSearchText={handleSearchText} />
      <SubHeader />
      <Sidebar />
      <Main searchText={searchText} />
    </div>
  );
};

export default App;
