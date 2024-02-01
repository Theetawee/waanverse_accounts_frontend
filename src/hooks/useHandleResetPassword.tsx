import toast from "react-hot-toast";
import useAxios from "./useAxios"
import { useState } from "react";

const useHandleResetPassword = () => {


  const api = useAxios();
  const [isLoading, setIsLoading] = useState(false);

  const getSecurityQuestions = async (email: string): Promise<{question1: string, question2: string}> => {
    setIsLoading(true);
    try {
      const response = await api.get(`/accounts/get_security_questions/${email}/`)

      if (response.status === 200) {
        return response.data
      } else {
        toast.error("Unable to process request with provided email address")
        return {question1: "", question2: ""}
      }
    } catch (error) {
      toast.error("Unable to process request with provided email address");
      return {question1: "", question2: ""}
    }
    finally {
      setIsLoading(false);
    }
  }


  const verifyAnswers=async (email: string, answer1: string, answer2: string) => {
    setIsLoading(true);
    try {
      const response = await api.post(`/accounts/verify_answers/${email}/`, {
        answer1,
        answer2
      })
      return response.data
    } catch {
      toast.error("Wrong answers, please try again");
    }
    finally {
      setIsLoading(false);
    }
  }


  const changePassword=async (new_password1: string, new_password2: string,token: string,uid: string) => {
    setIsLoading(true);
    try {
      const response = await api.post(`/accounts/reset/password/${uid}/${token}/`, {
        new_password1,
        new_password2,
        uid,
        token

      })
      return response.data
    } catch {
      toast.error("Unable to change password, please try again");

    } finally {
      setIsLoading(false);
    }

  }



  return {
    getSecurityQuestions,isLoading,verifyAnswers,changePassword
  }
}

export default useHandleResetPassword
