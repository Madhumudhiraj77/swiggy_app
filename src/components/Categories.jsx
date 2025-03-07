import React, { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { SWIGGY_CATEGORY_API } from "../utils/constants";
import { Link } from "react-router-dom";
const Categories = ({ categoriesData }) => {
  const { header, imageGridCards } = categoriesData;
  const totalItems = categoriesData?.imageGridCards?.info?.length || 0;

  const [scrollPosition, setScrollPosition] = useState(0);
  const galleryRef = useRef(null);
  const scrollAmount = 146 * 4;
  const handleScroll = (direction) => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const remaining =
    totalItems -
    1 -
    (window.innerWidth > 1024 ? 1024 / 146 : window.innerWidth / 146);
  // console.log("total",totalItems ,"remain",remaining)

  const maxScrollPosition = 140 * remaining;
  // console.log("scrollPosition", scrollPosition,window.innerWidth,maxScrollPosition,remaining);
 return (
    <>
      <div className=" md:flex justify-between items-center">
        <div className="font-extrabold text-[16px] md:text-[20px] mb-4">
          <h2>{header.title}</h2>
        </div>
        <div className="hidden md:flex items-center">
          <button
            className="bg-[#e2e2e7] w-[30px] h-[30px] rounded-full mx-2 flex items-center justify-center disabled:opacity-50 "
            onClick={() => handleScroll("left")}
            disabled={scrollPosition === 0}
          >
            <FaArrowLeft size={14} />
          </button>
          <button
            className="bg-[#e2e2e7] w-[30px] h-[30px] rounded-full mx-2 flex items-center justify-center  disabled:opacity-50"
            onClick={() => handleScroll("right")}
            disabled={scrollPosition > maxScrollPosition}
          >
            <FaArrowRight size={14} />
          </button>
        </div>
      </div>

      <div
        ref={galleryRef}
        className="flex gap-2.5"
        style={{
          overflow: "auto",
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE & Edge
        }}
        onScroll={(e) => setScrollPosition(e.target.scrollLeft)}
      >
        {imageGridCards?.info?.map((each) => (
          <div key={each.id} className=" shrink-0 ">
            <Link to={`${each.action.link.slice(22)}`}>
              <img
                className="object-cover w-full h-[170px] "
                src={SWIGGY_CATEGORY_API + each.imageId}
                alt="category_item"
                loading="lazy"
              />
            </Link>
          </div>
        ))}
      </div>
      <hr className="my-4 md:my-10 border-[#f2f2f3] border-[1px]" />
    </>
  );
};

export default Categories;
