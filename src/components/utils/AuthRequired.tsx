import { Navigate,Outlet, useSearchParams } from "react-router-dom";
import useAuth from "../../hooks/Auth/useAuth";



const AuthRequired = () => {

    const [searchParams] = useSearchParams();

    const redirect_uri = searchParams.get('redirect_uri')
    const callback = searchParams.get('callback')
    const app_name= searchParams.get('app_name')

    if (redirect_uri && callback === 'true'&& app_name) {
        sessionStorage.setItem('redirect_uri', redirect_uri)
        sessionStorage.setItem('app_name', app_name)
    }

    const {isAuthenticated } = useAuth();

    if (isAuthenticated) {
        return <Outlet />
    } else {
        return <Navigate to="/login" />
    }

}

export default AuthRequired
