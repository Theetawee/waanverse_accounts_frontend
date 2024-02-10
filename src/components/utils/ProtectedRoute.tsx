import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate, Outlet, useSearchParams } from "react-router-dom";

const ProtectedRoute = () => {
    const { isAuthenticated } = useContext(AuthContext);

    const [searchParams] = useSearchParams();

    const redirect_url = searchParams.get("redirect_url")
    const url=`${redirect_url}?authenticate=true`

    if (isAuthenticated) {
        if(redirect_url){
            window.location.href = url
        }
        return <Navigate to="/account/home" />;
    } else {
        return <Outlet />
    }




};

export default ProtectedRoute;
