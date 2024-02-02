import { AuthContext } from "../../context/AuthContext"
import { useContext } from "react"
import { Outlet, Navigate } from "react-router-dom";



const HasQuestions = () => {

    const { hasQuestions} = useContext(AuthContext);
    
  if(hasQuestions){
    return <Outlet />
  } else {
    return <Navigate to="/account/set-security-questions" />
  }
}

export default HasQuestions
