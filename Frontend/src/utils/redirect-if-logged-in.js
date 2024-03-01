import { Navigate } from "react-router-dom";

const RedirectIfLoggedIn = ({children})=>{
    if(JSON.parse(localStorage.getItem("user"))){
        return <Navigate to="/HR/dashboard" />
    }
    return children;

}
export default RedirectIfLoggedIn;