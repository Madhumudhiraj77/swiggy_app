import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../slices/cartSlice";

const RestaurantItem = ({ resItem, customBgColor }) => {
  // console.log("resItem",resItem)
  const {
    name,
    price,
    defaultPrice,
    description,
    imageId,
    id,
    itemAttribute,
    ribbon,
  } = resItem.info;
  const { vegClassifier } = itemAttribute;
  const dispatch = useDispatch();

  const cartItems = useSelector((store) => store.cart.items);
  const cartItem = cartItems.find((item) => item.resItem.info.id === id);
  const itemCount = cartItem ? cartItem.count : 0;


  // Add item to cart
  const handleAdd = () => {
    dispatch(addItem({ resItem }));
  };

  // Remove item from cart
  const handleRemove = () => {
    if (itemCount > 0) {
      dispatch(removeItem({ resItem }));
    }
  };

  return (
    <div className="md:flex my-4  py-4">
      <div className="w-full md:w-8/12">
        <div className="flex items-center space-x-2">
          <div
            className={`w-4 h-4 border-2 ${
              vegClassifier === "VEG" ? "border-green-600" : "border-red-600"
            } flex items-center justify-center`}
          >
            <div
              className={`w-2 h-2 ${
                vegClassifier === "VEG" ? "bg-green-600" : "bg-red-600"
              }  rounded-full`}
            ></div>
          </div>
          {ribbon?.text && (
            <span className="font-sans text-[16px] truncate text-[#ff5200]">
              {ribbon.text}
            </span>
          )}
        </div>

        <h1 className="font-bold text-[18px] truncate">{name}</h1>
        <h1 className="font-bold text-[14px] truncate">
          ₹{price ? price / 100 : defaultPrice / 100}
        </h1>
        <p className=" text-[#02060c99] text-[16px]  line-clamp-2">
          {description}
        </p>
      </div>
      <div className="w-full md:w-1/12"></div>
      <div
        className="relative  w-full m-1 rounded-xl md:w-3/12 "
        style={{ backgroundColor: customBgColor }}
      >
        <img
          className="object-cover w-full h-[160px] rounded-2xl"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
          alt={name}
        />
        <div className="absolute left-1/2 top-33 -translate-x-1/2">
          {itemCount === 0 ? (
            <button
              className="font-bold border bg-white text-[#1BA672] text-[18px] p-3 rounded-2xl text-center"
              onClick={handleAdd}
            >
              ADD
            </button>
          ) : (
            <div className="flex items-center justify-between bg-white p-2 rounded-2xl border border-[#1BA672]">
              <button
                className="text-[#1BA672] font-bold text-[18px] px-3"
                onClick={handleRemove}
              >
                -
              </button>
              <span className="font-bold text-[18px] text-[#1BA672]">
                {itemCount}
              </span>
              <button
                className="text-[#1BA672] font-bold text-[18px] px-3"
                onClick={handleAdd}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

//Higher order component
export const ItemCostRestaurantItem = (RestaurantItem) => {
  return ({ resItem, customBgColor, price, count }) => {
    console.log("price", price);
    return (
      <div>
        <RestaurantItem {...{ resItem, customBgColor }} />
        <h1 className="font-bold">Item Cost : {price * count}</h1>
      </div>
    );
  };
};

export default RestaurantItem;


