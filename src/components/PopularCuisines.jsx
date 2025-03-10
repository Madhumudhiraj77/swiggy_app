import React, { useEffect, useState } from "react";
import {
  ROUTES_NAMES,
  SEARCH_CUISINES_API,
  SEARCH_CUISINES_IMAGES_API,
} from "../utils/constants";
import { Link } from "react-router-dom";

const PopularCuisines = ({ setTextInput }) => {
  const [cuisinesCarosal, setCuisinesCarosal] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(SEARCH_CUISINES_API);
        if (!response.ok) throw new Error("Error fetching search results data");
        const jsonData = await response.json();
        setCuisinesCarosal(jsonData?.data?.cards || []);
      } catch (err) {
        console.log("Error while fetching search results", err);
      }
    };
    fetchData();
  }, []);

  const { header, imageGridCards } = cuisinesCarosal[1]?.card?.card || {};
  const carosalImages = imageGridCards?.info;
  const title = header?.title || "Popular Cuisines";
  console.log("cuisinesCarosal", cuisinesCarosal);

  const handleLinkClick = (text) => {
    setTextInput(text); // Call setTextInput with the link text when the link is clicked
  };

  return (
    <div>
      <h1 className="text-xl font-bold mt-4">{title}</h1>
      <div
        className="flex w-full "
        style={{
          overflow: "auto",
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE & Edge
        }}
      >
        {carosalImages?.map((each) => (
          <div
            key={each.id}
            className=" shrink-0 "
            onClick={() => handleLinkClick(each.action.link.slice(23))}
          >
            {/* <Link
              to={`${ROUTES_NAMES.SEARCH_RESTAURANT_DETAILS.replace(
                ":resId",
                each.id
              )}?query= ${each.action.link.slice(23)}`} >*/}

            <img
              className="w-[100px] h-auto object-cover mx-2"
              src={SEARCH_CUISINES_IMAGES_API + each.imageId}
            />
            {/* </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCuisines;
