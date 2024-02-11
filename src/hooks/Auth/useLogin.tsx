import { useState } from "react";
import useAxios from "../useAxios";
import toast from "react-hot-toast";
import useAuth from "./useAuth";


const useLogin = () => {
    const [loging, setLoging] = useState(false);
    const api = useAxios();

    const { AuthenticateUser} = useAuth();


    const LoginUser = async (email: string,password: string ) => {
        setLoging(true);
        try {
            const response = await api.post("/accounts/login/", { email, password });

            const data = response.data
            toast.success("Login successful");
            AuthenticateUser(data.user);
        } catch (error) {
            console.log(error);
            toast.error("Unable to login, please try again.");
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
