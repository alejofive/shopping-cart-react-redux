import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, delCart } from "../redux/action";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const addProduct2 = (product) => {
    dispatch(delCart(product));
  };

  return (
    <div className="max-w-screen-md m-auto">
      {state.map((item) => {
        return (
          <div className="grid grid-cols-6 border-b-2 py-10">
            <div className="col-span-3">
              <img
                src={item.image}
                alt=""
                className="h-56 w-56 object-contain"
              />
            </div>
            <div className="col-span-3">
              <h2>{item.title}</h2>
              <p>
                {item.qty} X ${item.price}= ${item.qty * item.price}
              </p>
              <div className="flex gap-3">
                <button
                  className="px-2 border border-black rounded-sm hover:bg-black hover:text-white"
                  onClick={() => addProduct2(item)}
                >
                  <i class="fa-solid fa-minus"></i>
                </button>
                <button
                  className="px-2  border border-black rounded-sm hover:bg-black hover:text-white"
                  onClick={() => addProduct(item)}
                >
                  <i class="fa-solid fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
