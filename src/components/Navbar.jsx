import React from "react";

const Navbar = () => {
  return (
    <div className="py-5 border border-b-2">
      <div className="flex justify-between items-center max-w-screen-lg  m-auto">
        <h1 className="text-2xl font-bold">THE COLLECTION</h1>

        <nav>
          <a href="" className="text-base mr-10 text-black font-bold">
            Home
          </a>
          <a href="" className="mr-10 text-slate-400">
            Products
          </a>
          <a href="" className="mr-10 text-slate-400">
            About
          </a>
          <a href="" className="mr-20 text-slate-400">
            Contact
          </a>
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
