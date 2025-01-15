import { useState } from "react"
import ItemCards from "./ItemCards"
const RestaurantCaregory=({data,showItems,setShowItems,setShowIndex})=>{
    
    const handleClick=()=>{
        setShowIndex()
    }
    console.log(data)
    return(
    <>
        <div className="w-6/12 bg-gray-50 shadow-lg p-4 my-4 mx-auto ">
            <div className="m-4 h-5 p-2 flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data?.title} ({data.itemCards.length})</span>
                <span>▼</span>
            </div>
            {showItems && <ItemCards items={data?.itemCards} />}
        </div>

    </>
    );

}
export default RestaurantCaregory;