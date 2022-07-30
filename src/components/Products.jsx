import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Productos = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");

      if (componentMounted) {
        setData(await response.clone().json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading2 = () => {
    return (
      <div className="mt-20">
        <h1 className="text-3xl">Loading...</h1>
      </div>
    );
  };

  const filterProduct = () => {
    const productsFiltered = data.filter(
      (item) => item.category === category || !category
    );
    return productsFiltered;
  };

  const ShowProducts = () => {
    return (
      <div>
        <div className="mt-10 flex justify-center gap-3 pb-5">
          <button
            className={`px-4 py-2 border border-black rounded-sm hover:bg-black hover:text-white ${
              category === "" && "bg-black text-white"
            }`}
            onClick={() => setCategory("")}
          >
            All
          </button>
          <button
            className={`px-4 py-2 border border-black rounded-sm hover:bg-black hover:text-white ${
              category === "men's clothing" && "bg-black text-white"
            }`}
            onClick={() => setCategory("men's clothing")}
          >
            Men's clothing
          </button>
          <button
            className={`px-4 py-2 border border-black rounded-sm hover:bg-black hover:text-white ${
              category === "women's clothing" && "bg-black text-white"
            }`}
            onClick={() => setCategory("women's clothing")}
          >
            Women's clothing
          </button>
          <button
            className={`px-4 py-2 border border-black rounded-sm hover:bg-black hover:text-white ${
              category === "jewelery" && "bg-black text-white"
            }`}
            onClick={() => setCategory("jewelery")}
          >
            Jewelery
          </button>
          <button
            className={`px-4 py-2 border border-black rounded-sm hover:bg-black hover:text-white ${
              category === "electronics" && "bg-black text-white"
            }`}
            onClick={() => setCategory("electronics")}
          >
            Electronics
          </button>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {filterProduct().map((product) => {
            return (
              <div
                className="col-span-1 border rounded p-5 text-center"
                key={product.id}
              >
                <img
                  src={product.image}
                  alt=""
                  className="h-64 object-contain"
                />
                <div>
                  <h1 className="mb-2 mt-2 font-bold">
                    {product.title.substring(0, 12)}...
                  </h1>
                  <p className="my-2 mb-5 font-bold">${product.price}</p>
                  <Link
                    to={`/product/${product.id}`}
                    className="mt-3 px-4 py-2 bg-black text-white rounded"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-screen-lg m-auto mt-10">
      <h1 className="text-center text-4xl font-bold py-5">Latest Products</h1>
      <hr />
      <div className="text-center">
        {loading ? <Loading2 /> : <ShowProducts />}
      </div>
    </div>
  );
};

export default Productos;
