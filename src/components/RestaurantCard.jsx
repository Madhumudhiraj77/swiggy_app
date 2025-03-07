import React from "react";
import { BiStar } from "react-icons/bi";
import { RESTAURANT_LOGO } from "../utils/constants";

const RestaurantCard = ({ data }) => {
  // console.log("restaurant caRD",data)
  const { info } = data || {};
  const {
    name,
    cloudinaryImageId,
    avgRating,
    sla,
    areaName,
    cuisines,
    aggregatedDiscountInfoV3,
  } = info;
  return (
    <div className=" bg-white rounded-2xl  hover:scale-95 transform transition-all duration-300">
      <div className="relative h-[180px]">
        <img
          alt={`Image of ${name}`}
          className="object-cover w-full h-full rounded-2xl"
          src={RESTAURANT_LOGO + cloudinaryImageId}
        />
        <div className="absolute bottom-0 left-0 w-full h-2/5 bg-gradient-to-t from-black to-transparent rounded-b-2xl"></div>

        {aggregatedDiscountInfoV3?.header && (
          <div className="absolute bottom-2 left-2 text-white font-extrabold">
            {aggregatedDiscountInfoV3?.header}
            {aggregatedDiscountInfoV3?.subHeader}
          </div>
        )}
      </div>

      <div className="mt-3">
        <h1 className="text-[16px] md:text-[18px] font-bold truncate">
          {name}
        </h1>
        <div className="flex items-center">
          <div className="md:w-[20px] md:h-[20px] w-[16px] h-[16px] rounded-full bg-[#198d3e] flex justify-center items-center p-1 mr-2">
            <BiStar
              fontSize={14}
              className="text-white inline"
              strokeWidth={2}
              fill="white"
            />
          </div>
          <span className="text-[13px] md:text-[16px]  font-semibold truncate">
            {avgRating} {sla?.slaString}
          </span>
        </div>
        <h6 className="text-[13px] md:text-[16px] text-[#02060c99] font-semibold truncate">
          {cuisines?.join(", ")}
        </h6>
        <h6 className="text-[13px] md:text-[16px] text-[#02060c99] font-semibold  truncate">
          {areaName}
        </h6>
      </div>
    </div>
  );
};

export default RestaurantCard;
