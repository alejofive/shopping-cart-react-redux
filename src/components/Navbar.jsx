import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="py-5 border border-b-2">
      <div className="flex justify-between items-center max-w-screen-lg  m-auto">
        <Link to="/">
          <h1 className="text-2xl font-bold">THE COLLECTION</h1>
        </Link>

        <nav>
          <Link to="/" className="text-base mr-10 text-black font-bold">
            Home
          </Link>
          <Link to="/products" className="mr-10 text-slate-400">
            Products
          </Link>
          <Link to="/about" className="mr-10 text-slate-400">
            About
          </Link>
          <Link to="contact" className="mr-20 text-slate-400">
            Contact
          </Link>
        </nav>

        <div>
          <button className="px-4 py-2 border border-black rounded-sm hover:bg-black hover:text-white ">
            <i className="fa-solid fa-cart-shopping mr-3"></i>Cart 0
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
