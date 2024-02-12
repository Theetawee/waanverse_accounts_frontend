/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import useAxios from "../useAxios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import { jwtDecode } from "jwt-decode";
import { UserType,TokenData } from "../types";


const useLogin = () => {
    const [loging, setLoging] = useState(false);
    const api = useAxios();
    const navigate = useNavigate();
    const {setUser } = useAuth();

    const LoginUser = async (email: string,password: string ) => {
        setLoging(true);
        try {
            const response = await api.post("/accounts/login/", { email, password });

            const data = response.data
            toast.success("Login successful");
            localStorage.setItem('user', "true");
            const token_data:TokenData = jwtDecode(data.access)
            const user:UserType = {
                username: token_data.username,
                name: token_data.name,
                image: token_data.image,
                image_hash: token_data.image_hash,
                email:token_data.email
            }
            setUser(user);
            navigate('/account/home');


        } catch (error: any) {
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
