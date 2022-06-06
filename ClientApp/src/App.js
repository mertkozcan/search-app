import React, { Component, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import SubHeader from "./components/SubHeader";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [colorFilters,setColorFilters] = useState([]);
  const [brandFilters, setBrandFilters] = useState([]);
    const [order, setOrder] = useState("");

  const handleSearchText = (search) => {
    setSearchText(search);
  };

  const handleFilters = (colors,brands) => {
    setColorFilters(colors);
    setBrandFilters(brands);
  }

  const handleOrder = (order) => {
    setOrder(order);
  }

  return (
    <div>
      <Header handleSearchText={handleSearchText} />
      <SubHeader searchText={searchText} handleOrder={handleOrder} selectedOrder={order} />
      <Sidebar handleFilters={handleFilters} handleOrder={handleOrder} />
      <Main searchText={searchText} colorFilters={colorFilters} brandFilters={brandFilters} order={order} />
    </div>
  );
};

export default App;
