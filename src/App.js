import {lazy,Suspense,useState,useEffect} from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer"
import { createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu"
import UserContext from "./utils/UserContext";
import appStore from "./utils/AppStore";
import { Provider } from "react-redux";
import Cart from "./components/Cart";


const Grocery=lazy(()=>import ("./components/Grocery"))

const AppLayout=()=>{
  const [userName,setUserName]=useState()
  useEffect(()=>{
    const data={
      name:"naina",
    };
    setUserName(data.name)
},[])
  return (
    <>
    <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser:userName ,setUserName}}>
        <Header/>
        <Outlet/>
        <Footer/>
      </UserContext.Provider>
    </Provider>
    
      
    </>
  );
}
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/> ,
      },
      {
        path:"/grocery",
        element:(<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>),
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
    errorElement:<Error/>,
  },
  
]);

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)

 