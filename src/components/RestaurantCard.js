import { IMG_URL } from "../utils/contents";
const RestaurantCard=({name,cloudinaryImageId,cuisines,avgRating})=>{

    return(
      < div className="card w-[270px] rounded-lg  shadow-black-300  h-[400px] shadow-lg m-3 hover:scale-[1.05] transition delay-100 duration-300 ease-in-out">
         <img src={IMG_URL+cloudinaryImageId} alt="restaurant img" className="w-[100%] h-[65%]   border-b border-black rounded-t-lg" />
         <div className="content p-2">
          <h2 className="text-2xl font-medium">{name}</h2>
          <h3 className="text-sm">{cuisines.slice(0,7).join(", ")}</h3>
          <h4 className="text-sm">{avgRating} stars</h4>
         </div>
       </div>
    );
  }

 export  const withPromotedLabel=(RestaurantCard)=>{
      return(props)=>{
          return(
            <div>
                <label className="relative top-4 bg-black text-white m-2 p-2 ">Is Open</label>
                <RestaurantCard {...props}/>
            </div>
          );
      };
  }

  export default RestaurantCard;