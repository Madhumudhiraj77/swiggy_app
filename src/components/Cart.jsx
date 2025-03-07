import React from "react";
import { useSelector } from "react-redux";
import RestaurantItem, { ItemCostRestaurantItem } from "./RestaurantItem.jsx";
import BillDetails from "./BillDetails.jsx";
import CartEmpty from "./CartEmpty.jsx";
import { colors } from "../utils/constants.js";

const Cart = () => {
  const itemCards = useSelector((store) => store.cart.items);

  const RestaurantItemCostDetails = ItemCostRestaurantItem(RestaurantItem);
  return (
    <div>
      {itemCards.length > 0 &&
        itemCards.map((eachItem, index) => (
          <div
            className="w-full md:w-8/12 lg:w-6/12 m-auto shadow-xl rounded-2xl mb-4 p-4 bg-white"
            key={eachItem.resItem.info.id}
          >
            <RestaurantItemCostDetails
              resItem={eachItem.resItem}
              customBgColor={colors[index % colors.length]}
              price={
                eachItem.resItem.info.price / 100 ||
                eachItem.resItem.info.defaultPrice / 100
              }
              count={eachItem.count}
            />
          </div>
        ))}
      {itemCards.length > 0 ? <BillDetails /> : <CartEmpty />}
    </div>
  );
};

export default Cart;
