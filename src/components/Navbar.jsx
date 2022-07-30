import React from "react";

import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);

  return (
    <div className="py-5 border border-b-2">
      <div className="flex justify-between items-center max-w-screen-lg m-auto">
        <Link to="/">
          <h1 className="text-2xl font-bold">THE COLLECTION</h1>
        </Link>

        <nav>
          <NavLink
            to="/"
            className={(aux) =>
              aux.isActive
                ? "mr-10 text-black font-bold"
                : "mr-10 text-slate-400"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={(aux) =>
              aux.isActive
                ? "mr-10 text-black font-bold"
                : "mr-10 text-slate-400"
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className={(aux) =>
              aux.isActive
                ? "mr-10 text-black font-bold"
                : "mr-10 text-slate-400"
            }
          >
            About
          </NavLink>
          <NavLink
            to="contact"
            className={(aux) =>
              aux.isActive
                ? "mr-10 text-black font-bold"
                : "mr-10 text-slate-400"
            }
          >
            Contact
          </NavLink>
        </nav>

        <div>
          <Link
            to="/cart"
            className="px-4 py-2 border border-black rounded-sm hover:bg-black hover:text-white "
          >
            <i className="fa-solid fa-cart-shopping mr-3"></i>Cart{" "}
            {state.length}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
