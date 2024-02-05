/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState,useContext } from "react";
import useAxios from "./useAxios";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { StepContext } from "../context/StepContext";
import { SignupFormData } from "./types";

interface errorType {
    field: string;
    message: string;
}

const useSignup = () => {

    const { setStep, setData } = useContext(StepContext);

    const { AuthenticateUser } = useContext(AuthContext);

    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<errorType[]|null>(null);
    const api = useAxios();

    const signup =async (data: SignupFormData) => {
        setIsLoading(true);

        try {

            const response =await api.post("/accounts/signup/", data);
            AuthenticateUser(response.data.user);
            toast.success("Signup successful");
            setStep(1);
            setData({
                email: "",
                password1: "",
                password2: "",
                username: "",
                gender: "male",
                date_of_birth: "",
                country: "",
                name: "",
                phone:""
            });

        } catch (error: any) {
            console.log(error)
            const set_errors:errorType[]=[];
            if (error.response.data.email) {
                set_errors.push({field: "Email error", message: error.response.data.email[0] });
            }
            if (error.response.data.country) {
                set_errors.push({field: "Country error", message: error.response.data.country[0] });
            }
            if (error.response.data.first_name) {
                set_errors.push({field: "First name error", message: error.response.data.first_name[0] });
            } if (
                error.response.data.last_name
            ) {
                set_errors.push({field: "Last name error", message: error.response.data.last_name[0] });
            }
            if(error.response.data.non_field_errors){
                set_errors.push({field: "Password error", message: error.response.data.non_field_errors[0] });
            }
            if(error.response.data.phone){
                set_errors.push({field: "Phone error", message: error.response.data.phone[0] });
            }
            if(error.response.data.gender){
                set_errors.push({field: "Gender error", message: error.response.data.gender[0] });
            }
            if(error.response.data.date_of_birth){
                set_errors.push({field: "Date of birth error", message: error.response.data.date_of_birth[0] });
            }

            setErrors(set_errors);
            toast.error("Signup failed");
        }finally{
            setIsLoading(false);
        }
    }

    return {signup,isLoading,errors}

}

export default useSignup
