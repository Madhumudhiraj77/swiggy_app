import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Shimmer from "./Shimmer";

const HomePage = () => {
  return (
    <div>
      <Header />
      {/* <Body /> */}
      <Outlet />
    </div>
  );
};

export default HomePage;
