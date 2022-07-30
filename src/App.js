import "./App.css";
import { Home } from "./pages/Home";

import { HashRouter, Routes, Route } from "react-router-dom";

import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
