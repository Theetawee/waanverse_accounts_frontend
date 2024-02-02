import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { Navigate,Outlet } from "react-router-dom";


const HasNoQuestions = () => {

    const { hasQuestions } = useContext(AuthContext);

    if(hasQuestions) {
      return <Navigate to="/account" />
    } else {
      return <Outlet />
    }



  
}

export default HasNoQuestions
