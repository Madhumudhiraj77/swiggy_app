import React, { useEffect, useMemo, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link, useParams, useSearchParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import PageNotFound from "./PageNotFound";
import { CATEGORY_RESTAURANTS_API } from "../utils/constants";

const CategoriesRestaurants = () => {
  const { collectionId } = useParams();
  const [searchParams] = useSearchParams(); // Extract the collection ID
  const tags = searchParams.get("tags");
  const [catResData, setCatResData] = useState([]);
  const [showShimmer,setShowShimmer] = useState(true)
  useEffect(() => {
    const fetchCatResData = async () => {
      try {
        // `https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.387158&lng=78.545031&collection=${collectionId}&tags=${tags}&sortBy=&filters=&type=rcv2`
        let response = await fetch(
          `https://swiggy-app-clone.vercel.app/proxy?url=${encodeURIComponent(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.387158&lng=78.545031&collection=${collectionId}&tags=${tags}&sortBy=&filters=&type=rcv2`)}`
        );
        if (!response.ok) throw new Error("Error fetching data");
        let jsonResponse = await response.json();
        setShowShimmer(false)
        console.log("jsonResponse madhu",jsonResponse?.data?.cards)
        setCatResData(jsonResponse?.data?.cards || []);
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    };

    fetchCatResData();
  }, [collectionId, searchParams.toString()]);

  const filteredRestaurants = useMemo(()=>{
    return  catResData?.filter(
      (each) =>
        each?.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    );
  },[catResData])
  console.log("catResData",catResData)

  if (showShimmer) return <Shimmer/>
  if(catResData.length === 0) return <PageNotFound/>
  const {
    title = "",
    description = "",
    count = 0,
  } = catResData[0]?.card?.card || {};



  return (
    <div className="max-w-[1200px] mx-auto p-5">
      <div>
        <h1 className="font-bold text-[20px] md:text-[40px]">{title}</h1>
        <p className="font-medium text-[16px] md:text-[20px] text-gray-600">
          {description}
        </p>
        <p className="font-bold text-[16px] md:text-[18px] my-4">
          {count} {"to explore"}
        </p>
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredRestaurants.map((each) => {
          const { areaName, name, id } = each?.card?.card?.info || {};
          return (
            <Link to={`/${areaName}/${name}/${id}`} key={id}>
              <RestaurantCard data={each?.card?.card} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesRestaurants;
