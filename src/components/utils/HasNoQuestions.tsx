import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { Outlet, Navigate } from "react-router-dom";



const HasNoQuestions = () => {

    const { userInfo} = useContext(AuthContext);
    if (userInfo?.has_security_questions) {
        return <Outlet />
    } else {
        return <Navigate to="/account/set-security-questions" />
    }

}

export default HasNoQuestions
