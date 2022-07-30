import React from "react";

const Banner = () => {
  return (
    <header className="relative flex">
      <img
        src="/shopping-cart-react-redux/img/banner.jpg"
        alt=""
        className="w-full h-96 object-cover "
      />
      <div className="absolute top-1/3 text-center w-full ">
        <h1 className="text-6xl font-bold">NEW SEASON ARRIVALS</h1>
        <p className="mt-5">CHECK ALL THE TRENDS</p>
      </div>
    </header>
  );
};

export default Banner;
