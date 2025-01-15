import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import { useEffect, useState, useContext} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import {RES_URL} from "../utils/contents"
import UserContext from "../utils/UserContext"

const Body =()=>{
    const [searchInput,setSearchInput]=useState("");
    const [restaurants,setRestaurants]=useState([]);
    const [listOfRestaurants,setListOfRestaurants]=useState([]);
   

    const filterData=(searchInput)=>{
        const filtdata=restaurants.filter((res)=>{
            return res.info.name.toLowerCase().includes(searchInput.toLowerCase());
        })
        return filtdata;
    }
   
    useEffect(()=>{
        fetchdata();
    },[]);

    const  fetchdata= async ()=>{
        const prom= await fetch(RES_URL);
        const jsn=await prom.json();
        setRestaurants(jsn.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestaurants(jsn.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    const onlineStatus=useOnlineStatus();
    if (onlineStatus=== false){
        return <h1>Looks like you're offline!! Please check your internet connection. </h1>
    }
    const{setUserName,loggedInUser}=useContext(UserContext);

    return restaurants.length===0 ?
        (
        <Shimmer/>) :
        (
        <>
            
           <button className="top-btn m-3 p-2 rounded-md text-md font-medium bg-gray-300 hover:bg-gray-400" onClick={()=>{
            
            const data=restaurants.filter((res)=>{return res.info.avgRating>4.3});
            setListOfRestaurants(data);
           }}>
            Top Rated Restaurants</button>
            <div className="search w-[100%] h-[20vh] flex justify-center items-center">
                <input 
                type="text"
                placeholder="Search" 
                value={searchInput} 
                className="inputBox w-[300px] h-6 m-4 p-5 text-md rounded-md border-2 border-gray-500 " 
                onChange={(e)=>
                    setSearchInput(e.target.value)}>
                </input>
                <button className="searchBtn m-3 px-3 py-2 rounded-md text-md font-medium bg-orange-300 hover:bg-orange-400" onClick={()=>{
                    const data=filterData(searchInput);
                    setListOfRestaurants(data);
                    
                }}>Search</button>
                
            </div>
            <div className="container flex justify-center items-center">
                <div className="restaurants flex justify-start w-[72vw] gap-[8vh] h-fit items-start flex-wrap ">
                {  
                    listOfRestaurants.map((restaurant)=>{
                        return <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id}> 
                        {
                           <RestaurantCard {...restaurant.info}/>
                        }</Link>
                })
                
                }
                </div>
            </div>
            
        </>
      
    );
}
export default Body;