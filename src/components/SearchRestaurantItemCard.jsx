import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";

const SearchRestaurantItemCard = () => {
  const [searchParams] = useSearchParams();
  const {resId} = useParams()
  const query = searchParams.get("query");
  const[resData,setResData] = useState([])
  
  useEffect(()=>{
    const fetchSelectedSearch = async() =>{
      try{
        let response = await fetch(`https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/search/v3?lat=17.387158&lng=78.545031&str=${query}&trackingId=null&submitAction=STORED_SEARCH&queryUniqueId=null&selectedPLTab=RESTAURANT`)
        let jsonResponse = await response.json()
        console.log("jsonResponse",jsonResponse)
        setResData(jsonResponse?.data.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards)
      }catch(err){
        console.log("Error while fetching selected search item",err)
      }
    }
    fetchSelectedSearch()
  },[searchParams])

  return (
    <div className="max-w-[1200px] mx-auto p-5">
      <h1>Restaurant Search Results for: {query} {resId}</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {resData.map((each) => {
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

export default SearchRestaurantItemCard;
