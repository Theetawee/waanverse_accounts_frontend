import { useState,useContext } from "react";
import useAxios from "./useAxios";
import { toast } from 'react-hot-toast';
import { AuthContext } from "../context/AuthContext";


const useLogin = () => {

    const[isLoading, setIsLoading] = useState(false);

    const api = useAxios();

    const {AuthenticateUser } = useContext(AuthContext);


    const login: (email: string, password: string) => Promise<void> = async (email, password) => {
        setIsLoading(true);
        try {
            const response = await api.post("/accounts/login/", {
                email,
                password,
            })
            if (response.status === 200) {
                AuthenticateUser(response.data.user)
                toast.success("Login successful")

            } else {
                toast.error("Login failed")
            }
        } catch (error) {
            console.log(error)
            toast.error("Login failed")
        }finally{
            setIsLoading(false);
        }
    }

    return { login, isLoading }

}

export default useLogin;
