import { Navigate,Outlet } from "react-router-dom";
import useAuth from "../../hooks/Auth/useAuth";




const AuthRequired = () => {

    const {isAuthenticated } = useAuth();

    if (isAuthenticated) {
        return <Outlet />
    } else {
        return <Navigate to="/login" />
    }

}

export default AuthRequired
