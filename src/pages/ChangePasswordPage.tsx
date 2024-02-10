import TextInput from "../components/common/Inputs/TextInput"
import { useMutation } from "@tanstack/react-query";
import Endpoints from "../hooks/Endpoints";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FormEvent } from "react";
import Loader from "../components/common/Loader";
import { isAxiosError } from "axios";



const ChangePasswordPage = () => {

    const navigate = useNavigate();

    const { changePassword} = Endpoints();

    const {mutateAsync,isPending:isLoading } = useMutation({
        mutationFn: (data: { old_password: string, new_password1: string, new_password2: string }) => changePassword(data),

        onSuccess: () => {
            toast.success("Password changed successfully")
            navigate("/account/security")
        },
        onError: (error) => {
            console.log(error)
            if (isAxiosError(error)) {
                if (error.response?.data?.old_password) {
                    toast.error(error.response.data.old_password[0])
                }
                if (error.response?.data?.new_password1) {
                    toast.error(error.response.data.new_password1[0])
                }
                if (error.response?.data?.new_password2) {
                    toast.error(error.response.data.new_password2[0])
                }
            } else {

                toast.error("Something went wrong! Please try again")
            }
        }
    })




    const handleSubmit=(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const old_password = e.currentTarget.old_password.value;
        const new_password1 = e.currentTarget.new_password1.value;
        const new_password2 = e.currentTarget.new_password2.value;
        const data={
            old_password,
            new_password1,
            new_password2
        }
        mutateAsync(data)
    }




  return (
      <section className="py-8 px-4">
          <div className="bg-white p-8 shadow rounded-md">
              <form method="post" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 max-w-md space-y-6">
                      {/* old password */}
                      <TextInput type="password" name="old_password" label="Old Password" disabled={isLoading} id="old_password" auto_on={false} />
                      <TextInput type="password" name="new_password1" label="New Password" disabled={isLoading} id="new_password1" auto_on={false} />
                      <TextInput type="password" name="new_password2" label="Confirm New Password" disabled={isLoading} id="new_password2" auto_on={false} />
                      <div>
                          <button type="submit" className="w-full px-5 py-2.5 rounded bg-primary-600 text-white " disabled={isLoading}>
                              {isLoading ? <Loader/> : "Change Password"}
                          </button>
                      </div>
                  </div>

              </form>
        </div>
      </section>
  )
}

export default ChangePasswordPage
