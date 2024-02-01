import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import toast from "react-hot-toast";


const AccountPage = () => {

  const { userData,setUserData } = useContext(AuthContext);




  return (
    <>

      <div>
        <h1>Account Page</h1>
        {userData?.email}
      </div>

      <button onClick={() => {
        setUserData(null)
        toast.success("Logout successful")
      }}>Logout</button>

    </>
  )
}

export default AccountPage
