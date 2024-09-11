import { listenerCount } from "process";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  // useState Hook
  const [resListData, setResListData] = useState([]);
  const [filterRestaurantListData, setFilterRestaurantListData] = useState([]);
  const [searchText, setSearchText] = useState("");

  //   useEffect Hook
  useEffect(() => {
    console.log("useEffect call fn");
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.29040&lng=70.79150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setResListData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurantListData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  console.log("Body renderd");
  //   conditional rendering

  return resListData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-bar">
        <div className="search">
          <input
            type="text"
            className="search-text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              console.log(searchText);
              const searchFilterData = resListData.filter((restaurant) =>
                restaurant.info.name.toLowerCase().includes(searchText)
              );
              setFilterRestaurantListData(searchFilterData);
            }}
          >
            search
          </button>
        </div>
        <button
          className="top-btn"
          onClick={() => {
            const filterData = resListData.filter((res) => {
              return res.info.avgRating > 4.3;
            });
            // setResListData(filterData);
            setFilterRestaurantListData(filterData)
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {filterRestaurantListData.map((restaurant, index) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
