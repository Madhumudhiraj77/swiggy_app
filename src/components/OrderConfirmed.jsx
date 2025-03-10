import React, { useEffect } from "react";
import { ROUTES_NAMES } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import orderDone from "../assets/order-completed.png";
import { useDispatch } from "react-redux";
import { emptyItems } from "../slices/cartSlice";

const OrderConfirmed = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(emptyItems());
  }, [dispatch]);

  const handleNavigate = () => {
    navigate(ROUTES_NAMES.HOME);
  };

  return (
    <div className="flex flex-col items-center justify-center m-auto text-center gap-4 py-5 md:w-8/12 lg:w-6/12">
      <img
        className="max-h-90 w-auto object-contain"
        src={orderDone}
        alt="Order Done"
      />

      <p className="text-gray-600">
        You can go to the home page to view more restaurants.
      </p>

      <button
        onClick={handleNavigate}
        className="uppercase bg-[#ff5200] text-white px-4 py-2 font-bold rounded hover:bg-[#e64900] transition-all"
        aria-label="Go to home page"
      >
        See restaurants near you
      </button>
    </div>
  );
};

export default OrderConfirmed;
