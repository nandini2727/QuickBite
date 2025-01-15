import { useDispatch } from "react-redux";
import {IMG_URL} from "../utils/contents";
import {addItem} from "../utils/cartSlice"
const ItemCards=({items})=>{
    
    const dispatch=useDispatch()

    const handleAddItem=(item)=>{
        dispatch(addItem(item))
    }

    return(
        <div className="m-4 " >
            {items.map((item)=>{
            return(
                <div className="m-4 text-left p-4  flex justify-between border-b-[1px] border-gray-300" key={item?.card?.info?.id}>
                    <div className="w-9/12 p-4 ">
                        <p className="text-lg font-bold">{item?.card?.info?.name}</p>
                        <p className="text-md font-[700]">Rs. {item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100}</p>
                        <p>{item?.card?.info?.description}</p>
                    </div>
                    
                    <div className="w-3/12  ">
                        <img src={IMG_URL+item?.card?.info?.imageId} className=" w-[156px] h-[144px] object-cover rounded-lg" ></img>
                        <button
                         className="bg-black text-white p-2 text-sm rounded-md relative -top-11 left-10"
                         onClick={()=>handleAddItem(item)}
                        >Add-On</button>
                    </div>
                </div>
            );
        })}
        </div>
    )
}
export default ItemCards