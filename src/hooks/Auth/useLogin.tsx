/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import useAxios from "../useAxios";
import toast from "react-hot-toast";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
    const [loging, setLoging] = useState(false);
    const api = useAxios();
    const navigate = useNavigate();
    const { AuthenticateUser} = useAuth();


    const LoginUser = async (email: string,password: string ) => {
        setLoging(true);
        try {
            const response = await api.post("/accounts/login/", { email, password });

            const data = response.data
            toast.success("Login successful");
            AuthenticateUser(data.user);
        } catch (error: any) {
            console.log(error);
            if (error.response.data.non_field_errors) {
                toast.error(error.response.data.non_field_errors[0]);
                if (error.response.data.non_field_errors[0] === "E-mail is not verified.") {
                    navigate('/verify-email?redirect_login=true')
                }

            } else {
                toast.error("Unable to login, please try again.");
            }
        } finally {
            setLoging(false);
        }

    };

    return {
        LoginUser,
        loging,
    };
};

export default useLogin;
