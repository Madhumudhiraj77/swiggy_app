import React from "react";

const ShimmerRestaurantMenu = () => {
  const arrayLen = Array(10).fill("");

  return (
    <div className="w-11/12 md:w-9/12 lg:w-7/12 m-auto">
      <div className="w-full  border-gray-400 h-[200px] rounded-2xl my-5  bg-gray-100"></div>
      {arrayLen.map((_, index) => (
        <div className="h-[100px] bg-gray-100 rounded-2xl my-4" key={index}>
          {" "}
        </div>
      ))}
    </div>
  );
};

export default ShimmerRestaurantMenu;
