import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

const useAuth = () => {


    const Auth = useContext(AuthContext);

    return Auth;
}

export default useAuth

