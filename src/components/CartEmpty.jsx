import React from "react";
import { EMPTY_CART_IMG, ROUTES_NAMES } from "../utils/constants";
import { useNavigate } from "react-router-dom";
const CartEmpty = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(ROUTES_NAMES.HOME);
  };

  return (
    <div className=" flex flex-col md:w-8/12 lg:w-6/12 justify-center items-center  m-auto text-center gap-4 py-5">
      <img
        className="max-h-80 w-auto object-contain"
        src={EMPTY_CART_IMG}
        alt="Empty Cart"
        loading="lazy"
      />
      <h1 className="font-bold text-2xl">Your cart is empty</h1>
      <p className="text-gray-600">
        You can go to the home page to view more restaurants.
      </p>
      <button
        onClick={handleNavigate}
        className="uppercase bg-[#ff5200] text-white px-4 py-2 font-bold rounded hover:bg-[#e64900] transition-all"
      >
        See restaurants near you
      </button>
    </div>
  );
};

export default CartEmpty;
