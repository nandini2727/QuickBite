import { useParams } from "react-router-dom";
import { useState } from "react";
import Shimmer from "./Shimmer"
import RestaurantCategory from "./RestaurantCategory";
import useRestaurantInfo from "../utils/useRestaurantInfo";

const RestaurantMenu=()=>{
    const {resId}=useParams();
    const resInfo=useRestaurantInfo(resId)
    const [showIndex,setShowIndex]=useState(null);
    if (resInfo===null) return <Shimmer/> 
    else{
        const {name ,cuisines,costForTwoMessage}= resInfo?.cards[2]?.card?.card?.info;
        const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>{
            return c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        });
        return (
            <div className="text-center">
                
                <h1 className="font-bold text-3xl m-6">{name}</h1>
                <h2 className="font-bold text-2xl ">{cuisines.join(", ")} - {costForTwoMessage}</h2>
                <h2 className="text-lg m-5">Menu</h2>
                {categories.map((category,index)=>{
                    return <RestaurantCategory 
                    key={category?.card?.card?.title}
                    data={category?.card?.card}
                    showItems={index===showIndex}
                    setShowIndex={() => setShowIndex(index === showIndex ? null : index)}/>
                })}
                
            </div>
        );
    }                           
}
export default RestaurantMenu;