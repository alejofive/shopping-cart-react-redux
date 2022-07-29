import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Productos from "../components/Productos";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Productos />
    </div>
  );
};
