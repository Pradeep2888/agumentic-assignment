import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AppContext";

function PrivateRoute({children}) {
    const {isAuth}=useContext(AuthContext)
    if(isAuth===false){
        return <Navigate to="/contact"/>
    }
    return children
}

export default PrivateRoute;
