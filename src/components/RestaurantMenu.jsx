import React, { useEffect, useState } from "react";
import { RESTAURANT_DETAILS_API } from "../utils/constants";
import { BiStar } from "react-icons/bi";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import ShimmerRestaurantMenu from "./ShimmerRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resData, setResData] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    const fetchRestaurantData = async () => {
      try {
        const response = await fetch(RESTAURANT_DETAILS_API + resId);
        if (!response.ok)
          throw new Error("Error fetching restaurant menu data");
        const jsonData = await response.json();
        setResData(jsonData?.data?.cards || []);
      } catch (error) {
        console.error("Error fetching restaurant menu", error);
      }
    };

    fetchRestaurantData();
  }, [resId]);
  if (resData.length === 0) return <ShimmerRestaurantMenu/>

  const { text } = resData[0]?.card?.card || {};
  const {
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
    sla,
  } = resData[2]?.card?.card?.info || {};

  const regularCards =
    resData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
  const categoryData = regularCards.filter(
    (each) =>
      each?.card?.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  // console.log("categoryData", categoryData);
  const nestedCards =
    resData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (each) =>
        each?.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );

  // console.log("nestedCards", nestedCards);

  return (
    <div className="w-11/12 md:w-9/12 lg:w-7/12 m-auto">
      <h1 className="text-[16px] md:text-[26px] font-bold truncate my-4 pl-4">
        {text}
      </h1>

      <div className="bg-gradient-to-b from-white via-[#EBEBF2] to-[#DFDFE7] p-4 pt-0 rounded-4xl mb-5">
        <div className=" border p-4 bg-white rounded-3xl">
          <div className="flex items-center">
            <div className="md:w-[20px] md:h-[20px] w-[16px] h-[16px] rounded-full bg-[#198d3e] flex justify-center items-center p-1 mr-2">
              <BiStar
                fontSize={14}
                className="text-white inline"
                strokeWidth={2}
                fill="white"
              />
            </div>
            <span className="text-[13px] md:text-[16px]  font-bold truncate">
              {avgRating} ({totalRatingsString}) {costForTwoMessage}
            </span>
          </div>
          <h6 className="text-[13px] md:text-[16px] text-[#ff5200] font-semibold truncate underline">
            {cuisines?.join(", ")}
          </h6>
          <h6 className="text-[13px] md:text-[16px] font-bold  truncate">
            {areaName}
          </h6>
          <h6 className="text-[13px] md:text-[16px] font-bold  truncate">
            {sla?.slaString}
          </h6>
        </div>
      </div>
      <h1 className="m-auto w-full text-center font-bold text-[18px]">MENU</h1>
      {categoryData.map((each, index, array) => (
        <div key={each?.card?.card?.categoryId}>
          <RestaurantCategory
            resCategoryData={each?.card?.card}
            key={each?.card?.card?.categoryId}
            showItems={index === expandedIndex ? true : false}
            setExpandedIndex={() => setExpandedIndex(index)}
            setAllCollapse={() => setExpandedIndex(null)}
          />
          {index !== array.length - 1 && (
            <hr className=" border-[#f2f2f3] border-[4px] my-4" />
          )}
        </div>
      ))}
      {/* <div>
        {/* {categoryData.map((each) => (
          <div className="my-4 " key={each?.card?.card?.categoryId}>
            <div className="flex justify-between">
              <h1 className="font-bold text-[20px]">
                {each?.card?.card?.title} ({each?.card?.card?.itemCards.length})
              </h1>
              <button onClick={handleAccordion}><MdKeyboardArrowDown size={40}/>
              </button>
            </div>
        
        {
            each?.card?.card?.itemCards.map((eachItem, index, array) => (
              <React.Fragment key={eachItem.card.id}>
                <RestaurantItem
                  resItem={eachItem.card}
                  customBgColor={colors[index % colors.length]}
                />
                {index !== array.length - 1 && (
                  <hr className=" border-[#f2f2f3] border-[1px] my-4" />
                )}
              </React.Fragment>
            ))
          }
        
          
            <hr className=" border-[#f2f2f3] border-[4px] my-4" />
          </div>
        ))} */}
      {/* Nested Items */}
      {/* {nestedCards.map((each) => (
          <div key={each?.card?.card?.categoryId}>
            <h1
              className="font-bold text-[20px]"
            
            >
              {each?.card?.card?.title}{" "}
            </h1>
            {each?.card?.card?.categories.map((c, index, array) => (
              <div className="my-4 " key={c.categoryId}>
                <div className="flex justify-between ">
                  <h1 className="font-bold text-[18px]">
                    {" "}
                    {c.title} ({c.itemCards.length})
                  </h1>
                  <button><MdKeyboardArrowDown size={40}/>
                  </button>
                </div>
                {c?.itemCards.map((eachItem, index, array) => (
                  <React.Fragment key={eachItem.card.id}>
                <RestaurantItem
                  resItem={eachItem.card}
                  customBgColor={colors[index % colors.length]}
                />
               
                  <hr className=" border-[#f2f2f3] border-[1px] my-4" />
                
                  </React.Fragment>
            ))}
              </div>
            ))}
            <hr className=" border-[#f2f2f3] border-[4px] my-4" />
          </div>
        ))} 
      </div> */}
    </div>
  );
};

export default RestaurantMenu;
