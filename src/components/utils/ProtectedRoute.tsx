import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate, Outlet, useSearchParams } from "react-router-dom";

const ProtectedRoute = () => {
    const { isAuthenticated } = useContext(AuthContext);

    const [searchParams] = useSearchParams();

    const redirect = searchParams.get("redirect_uri");
    const linked_app = searchParams.get("linked_app");

    
    if(redirect && linked_app){
        localStorage.setItem("redirect_uri", redirect);
        localStorage.setItem("linked_app", linked_app);
    }


    if (isAuthenticated) {

        return <Navigate to="/account/home" />;
    } else {
        return <Outlet />
    }




};

export default ProtectedRoute;
