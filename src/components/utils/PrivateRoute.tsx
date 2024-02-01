import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate,Outlet } from "react-router-dom";





const PrivateRoute = () => {
    const { isAuthenticated} = useContext(AuthContext);

    if (isAuthenticated) {
        return <Outlet />;
    } else {
        return <Navigate to="/login" />
    }

}

export default PrivateRoute
