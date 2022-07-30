import "./App.css";
import { Home } from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Productos from "./components/Productos";
import Navbar from "./components/Navbar";
import Product from "./components/Product";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Productos />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
