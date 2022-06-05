import React, { Component, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import SubHeader from "./components/SubHeader";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [colorFilters,setColorFilters] = useState([]);
  const [brandFilters,setBrandFilters] = useState([]);

  const handleSearchText = (search) => {
    setSearchText(search);
  };

  const handleFilters = (colors,brands) => {
    setColorFilters(colors);
    setBrandFilters(brands);
  }

  return (
    <div>
      <Header handleSearchText={handleSearchText} />
      <SubHeader />
      <Sidebar handleFilters={handleFilters} />
      <Main searchText={searchText} colorFilters={colorFilters} brandFilters={brandFilters} />
    </div>
  );
};

export default App;
