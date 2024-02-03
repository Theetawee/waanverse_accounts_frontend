/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState,useContext } from "react";
import useAxios from "./useAxios";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";


interface errorType {
    field: string;
    message: string;
}

const useSignup = () => {


    const { AuthenticateUser } = useContext(AuthContext);

    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<errorType[]|null>(null);
    const api = useAxios();

    const signup =async (data: any) => {
        setIsLoading(true);
        const formData = new FormData();
        formData.append("email", data.waanverse_email);
        formData.append("password1", data.password);
        formData.append("first_name", data.first_name);
        formData.append("last_name", data.last_name);
        formData.append("country", data.country);
        formData.append("password2", data.confirm_password);
        formData.append("phone", data.phone_number);
        formData.append("gender", data.gender.toLowerCase());
        formData.append("date_of_birth", data.dob);

        try {

            const response =await api.post("/accounts/signup/", formData);
            AuthenticateUser(response.data.user);
            toast.success("Signup successful");

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
