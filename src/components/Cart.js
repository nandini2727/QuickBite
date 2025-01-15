import ItemCards from "./ItemCards";
import { clearCart } from "../utils/cartSlice";
import { useSelector ,useDispatch} from "react-redux";
import {Link} from "react-router-dom"
const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items)
    const dispatch=useDispatch()
    const handleClearClick=()=>{
        dispatch(clearCart())
    }
    return (
        <div className=" text-center w-6/12 m-auto">
            <h1 className="text-center font-bold mt-4 p-4 text-2xl ">Cart</h1>
            <button className="text-center font-semibold bg-black text-white p-2 mb-2 rounded-lg" onClick={handleClearClick}>Clear Cart</button>
            <ItemCards items={cartItems}/>
            {cartItems.length===0 && <h1 className=" font-medium m-4  text-lg">Cart Is Empty. Please Go To <Link to="/" className="text-blue-700">HomePage</Link> and view some restaurants</h1>}
        </div>
    )
}
export default Cart;