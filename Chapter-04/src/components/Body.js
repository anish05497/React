import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../config";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants){
    const filterdata = restaurants.filter((restaurant)=>
        restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    )

    return filterdata;
}


const Body = () => { 
    const [filteredRestuarant, setFilteredRestaurants] = useState([]);
    const [searchText, setsearchText] = useState("");
    const [allrestaurants, setAllrestaurants] = useState([]);
    console.log("render");

    useEffect(()=>{
        getRestaurant();
    },[])

    async function getRestaurant(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.3176452&lng=82.9739144&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setAllrestaurants(json?.data?.cards?.[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards?.[2]?.data?.data?.cards);
    }

    if (!allrestaurants) return null;


    return (allrestaurants?.length === 0) ? <Shimmer/> : (
        <>
        <div className="search-container">
            <input 
            type="text"
            className="search-input"
            placeholder="Search for Restaurants" 
            value={searchText}
            onChange={(e)=> {
                setsearchText(e.target.value);
                // setrestuarants(restaurantList);
            }} />
            <button className="search-btn" onClick={
                ()=>{
                    const data = filterData(searchText, allrestaurants);
                    setFilteredRestaurants(data);
                }
            }>Search</button>
        </div>

        <div className='restaurant-list'>
            {/* Added A functionality is the search item is not present then its show not found */}
            {filteredRestuarant.length === 0 ? (
                <p>No Restaurants found</p>
            ):(filteredRestuarant.map((restaurant) => {
                return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
            }))}
        </div>
        </>
    )
}



export default Body;