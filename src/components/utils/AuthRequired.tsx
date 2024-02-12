import { Navigate,Outlet, useSearchParams } from "react-router-dom";
import useAuth from "../../hooks/Auth/useAuth";



const AuthRequired = () => {

    const [searchParams] = useSearchParams();

    const redirect_uri = searchParams.get('redirect_uri')
    const callback = searchParams.get('callback')

    if (redirect_uri && callback === 'true') {
        sessionStorage.setItem('redirect_uri',redirect_uri)
    }
    console.log(redirect_uri)
    console.log(callback)

    const {isAuthenticated } = useAuth();

    if (isAuthenticated) {
        return <Outlet />
    } else {
        return <Navigate to="/login" />
    }

}

export default AuthRequired
