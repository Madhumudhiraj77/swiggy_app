import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import { SWIGGY_API, SWIGGY_API_MOBILE } from "../utils/constants";
import TopRestaurant from "./TopRestaurant";
import RestaurantsOnline from "./RestaurantsOnline";
import useDeviceType from "../customHooks/useDeviceType";
import { Mobile_API_Data } from "../utils/dummyDataMobile";
import Shimmer from "./Shimmer";

const Body = () => {
  const isMobile = useDeviceType();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let response = await fetch(SWIGGY_API, {
          headers: {
            "Cache-Control": "no-cache", // Disable caching
          },
        });
        if (!response.ok) throw new Error("Error fetching data");
        let jsonResponse = await response.json();
        setData(jsonResponse?.data?.cards || []);

        // let jsonResponse;

        // if (isMobile) {
        //   jsonResponse = Mobile_API_Data; // Assuming this is a JSON object
        // } else {
        //   const response = await fetch(SWIGGY_API);
        //   if (!response.ok) throw new Error("Error fetching data");
        //   jsonResponse = await response.json();
        // }

        // setData(jsonResponse?.data?.cards || []);
      } catch (error) {
        console.error("Error while fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Shimmer />;

  return (
    <div className="max-w-[1200px] mx-auto p-5">
      {data?.[0]?.card?.card && (
        <Categories categoriesData={data[0]?.card.card} />
      )}

      {data?.[1]?.card?.card && (
        <TopRestaurant topRestaurantData={data[1]?.card?.card} />
      )}

      {data?.[4]?.card?.card && (
        <RestaurantsOnline
          onlineRestaurantData={data[4]?.card?.card}
          title={data[2]?.card?.card?.title}
        />
      )}
    </div>
  );
};

export default Body;
