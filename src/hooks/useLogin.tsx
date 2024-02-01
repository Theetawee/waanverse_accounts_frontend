import { useState } from "react";
import useAxios from "./useAxios";
import { toast } from 'react-hot-toast';



const useLogin = () => {

    const[isLoading, setIsLoading] = useState(false);

    const api = useAxios();

    const login = async (email: string, password: string) => {
        setIsLoading(true);
        try {
            const response = await api.post("/accounts/login/", {
                email,
                password,
            })
            if (response.status === 200) {
                console.log(response.data)
                toast.success("Login successful")
                return response.data

            } else {
                console.log("login failed")
                toast.error("Login failed")
                console.log(response.data)
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
