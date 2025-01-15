import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return(
        <>
            <h1>Oops! </h1>
            <h2>Something went wrong. Please try again.</h2>
            <h2>{err.status}</h2>
            <h2>{err.statusText}</h2>
        </>        
    );
}
export default Error;