import { useState,useEffect } from "react";
import { MENU_URL } from "./contents";
const useRestaurantInfo=(resId)=>{
    const [resInfo,setResInfo]=useState(null);
   
    useEffect(()=>{
        fetchMenu();
    },[]);
    const fetchMenu= async()=>{
        const prom=await fetch(MENU_URL+resId);
        const json=await prom.json();
        setResInfo(json.data);
    }
    return resInfo;
}
export default useRestaurantInfo;