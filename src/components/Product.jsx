import React, { useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };

    getProduct();
  }, []);

  const Loading2 = () => {
    return (
      <div className="mt-20">
        <h1 className="text-3xl">Loading...</h1>
      </div>
    );
  };

  const ShowProducts = () => {
    return (
      <div className="grid grid-cols-6 ">
        <div className="col-span-3">
          <img src={product.image} alt="" className="w-96 h-96" />
        </div>
        <div className="col-span-3">
          <h4 className="font-bold uppercase text-gray-400">
            {product.category}
          </h4>
          <h1 className="text-4xl my-6">{product.title}</h1>
          <p>
            Rating {product.rating && product.rating.rate}
            <i class="fa-solid fa-star"></i>
          </p>
          <h3 className="font-bold my-4 text-4xl">$ {product.price}</h3>
          <p>{product.description}</p>
          <div className="flex gap-3 mt-5">
            <button
              className="px-5 py-2 border border-black rounded-sm hover:bg-black hover:text-white"
              onClick={() => addProduct(product)}
            >
              Add to Cart
            </button>
            <Link
              to="/cart"
              className="px-5 py-2 border-black border-2 text-white  bg-black"
            >
              Go to Cart
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-screen-lg m-auto py-5">
      <div className="py-4">{loading ? <Loading2 /> : <ShowProducts />}</div>
    </div>
  );
};

export default Product;
