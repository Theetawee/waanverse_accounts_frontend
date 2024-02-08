import { useQuery } from "@tanstack/react-query"
import Endpoints from "../hooks/Endpoints"
import Loader from "../components/common/Loader";
import CommonError from "../components/common/CommonError";
import useTopBar from "../hooks/useTopBar";





const ProfilePage = () => {

  useTopBar("Profile")

  const { getUserInfo} = Endpoints();

  const {data,isPending,isError } = useQuery({
    queryKey: ["user-info"],
    queryFn: getUserInfo
  })


  if (isPending) {
    return <Loader/>
  } else if (isError) {
    return <CommonError/>
  } else {
    return (
      <div>
        {data.username}
      </div>
    )
  }




  return (
      <section className="h-screen flex items-center justify-center">
          <div>
              <p>Profile page</p>
          </div>
    </section>
  )
}

export default ProfilePage
