import { useState ,useContext} from "react";
import {Link} from "react-router-dom";
import {LOGO_URL} from "../utils/contents"
import UserContext from "../utils/UserContext"
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () =>{
    const [btnlogin,setBtnLogin]=useState("Login");
    const onlineStatus=useOnlineStatus();
    const {loggedInUser}=useContext(UserContext)
    const cartItems= useSelector((store)=> store.cart.items);
    return (
    <div id="parent" className="flex h-[100px] text-white items-center justify-between bg-[#131921] ">
      
        <h1 className="text-4xl ml-10 font-body italic text-[#efab10]">Quick Bite</h1>
        <ul className="nav-items flex items-center">
          {/* <li className="mx-5 text-xl">Online Status:{onlineStatus?"✅":"❌"}</li> */}
          <li className="mx-5 text-xl"><Link to="/">Home</Link></li>
          <li className="mx-5 text-xl"><Link to="/about">About</Link></li>
          <li className="mx-5 text-xl"><Link to="/contact">Contact</Link></li>
          <li className="mx-5 text-xl font-bold"><Link to="/cart"> Cart ({cartItems.length} items)</Link></li>
          {console.log(cartItems)}
          <button className="login  mx-5 text-lg border rounded-md px-3 py-1" onClick={()=>{
            btnlogin==="Login"?setBtnLogin("Logout"):setBtnLogin("Login");
          }}>{btnlogin}</button>
          
        </ul>
    </div>
    );
}
export default Header;