import { useState } from "react";
import useAxios from "../useAxios";
import toast from "react-hot-toast";
import { UserType } from "../types";



const useLogin = () => {
    const [loging, setLoging] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [user, setUser] = useState<UserType|null>(null);
    const api = useAxios();



    const LoginUser = async (email: string,password: string ) => {
        setLoging(true);
        try {
            const response = await api.post("/accounts/login/", { email, password });

            const data = response.data
            console.log(data.access);
            toast.success("Login successful");
            localStorage.setItem("authenticated", "true");
            setIsSuccess(true);
            setUser(data.user);
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
        isSuccess,
        user
    };
};

export default useLogin;
