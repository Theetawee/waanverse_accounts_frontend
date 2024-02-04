import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

const Aside = () => {

  const { logout} = useContext(AuthContext);

  const handleLogout = () => {
    logout()
  }


  return (
    <>

      <div>
        <button onClick={handleLogout}>
          Logout
        </button>
    </div>



    </>
  )
}

export default Aside
