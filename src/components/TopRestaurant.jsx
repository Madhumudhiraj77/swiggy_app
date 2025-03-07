import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

const TopRestaurant = ({ topRestaurantData }) => {
  const { gridElements, header } = topRestaurantData;
  const [itemsPerView, setItemsPerView] = useState(
    window.screen.width >= 768 && window.screen.width < 1024 ? 3 : 4
  );
  const [slide, setSlide] = useState(0);
  const totalItems = gridElements.infoWithStyle.restaurants.length;
  let max = Math.ceil(totalItems - itemsPerView);
  // console.log("max", max);

  const handlePrev = () => {
    if (slide <= 0) return;
    setSlide((prev) => (prev <= 0 ? 0 : prev - itemsPerView));
  };

  const handleNext = () => {
    setSlide((prev) => (prev < max ? prev + itemsPerView : prev));
  };

  useEffect(() => {
    const handleView = () => {
      if (window.screen.width >= 768 && window.screen.width < 1024) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };
    window.addEventListener("resize", handleView);

    return () => window.removeEventListener("resize", handleView);
  }, []);

  // console.log("slide", slide, "max", max, "itemsPerView", itemsPerView,totalItems > 0);
  // console.log(slide,"itemsPerView",itemsPerView,"max",max ,"s",window.screen.width === 768);


  const navigateRestaurantPage = () =>{

  }
  return (
    <>
      <div className="flex justify-between items-center mb-[16px]">
        <h2 className="font-extrabold text-[16px] md:text-[20px]">
          {header.title}
        </h2>

        <div className={'hidden md:flex items-center'}>
        <button
            className="bg-[#e2e2e7] w-[30px] h-[30px] rounded-full mx-2 flex items-center justify-center disabled:opacity-50 "
            onClick={handlePrev}
            disabled={slide <= 0}
          >
            <FaArrowLeft size={14} />
          </button>
          <button
            className="bg-[#e2e2e7] w-[30px] h-[30px] rounded-full mx-2 flex items-center justify-center  disabled:opacity-50"
            onClick={handleNext}
            disabled={slide >= max}
          >
            <FaArrowRight size={14} />
          </button>
        </div>
      </div>

      {gridElements.infoWithStyle.restaurants.length === 0 ? (
        <p className="text-gray-500 mt-4">
          No restaurants available at the moment.
        </p>
      ) : (
        <div className="flex  overflow-x-scroll md:overflow-hidden">
          {gridElements.infoWithStyle.restaurants.map((each) => (
            <div
              className="w-6/12 sm:w-6/12 md:w-4/12 lg:w-3/12 flex-shrink-0 px-2 transition-transform duration-300 ease-in-out"
              key={each.info.id}
              style={{ transform: `translateX(-${slide * 100}%)` }}
              onClick={navigateRestaurantPage}
            >
            <Link to={`/${each.info.areaName}/${each.info.name}/${each.info.id}`} > <RestaurantCard data={each} /> </Link>
            </div>
          ))}
        </div>
      )}

      <hr className="my-4 md:my-10 border-[#f2f2f3] border-[1px]" />
    </>
  );
};

export default TopRestaurant;
