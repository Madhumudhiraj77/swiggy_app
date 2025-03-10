import React from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantsOnline = ({ onlineRestaurantData, title }) => {
  const { gridElements } = onlineRestaurantData;

  return (
    <>
      <h2 className="font-extrabold text-[16px] md:text-[20px] mb-4">
        {title}
      </h2>

      {gridElements.infoWithStyle.restaurants.length === 0 ? (
        <p className="text-gray-500 mt-4">
          No restaurants available at the moment.
        </p>
      ) : (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {gridElements.infoWithStyle.restaurants.map((each) => (
            <Link
              to={`/${each?.info?.areaName}/${each?.info?.name}/${each?.info?.id}`}
              key={each?.info?.id}
            >
              <RestaurantCard data={each} />
            </Link>
          ))}
        </div>
      )}

      <hr className="my-4 md:my-10 border-[#f2f2f3] border-[1px]" />
    </>
  );
};

export default RestaurantsOnline;
