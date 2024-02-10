import axios, { AxiosInstance } from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useAxios = () => {
    const baseUrl: string = import.meta.env.VITE_BASE_URL;
    const { innerLogout,AuthenticateUser} = useContext(AuthContext);
    const axiosInstance: AxiosInstance = axios.create({
        baseURL: baseUrl,
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
        },
    });

    const updateUserInfo=async()=>{
        try{
            const response = await axiosInstance.get("/accounts/me/")
            AuthenticateUser(response.data)
        }catch(error){
            console.log(error)
            innerLogout()
        }
    }

    //Add a response interceptor
    axiosInstance.interceptors.response.use(
        (response) => response,
        async (error) => {
            const originalRequest = error.config;

            // Check if the error is due to an expired access token (status code 401)
            if (
                error.response &&
                error.response.status === 401 &&
                !originalRequest._retry
            ) {
                originalRequest._retry = true;
                try {
                    // Wait for the token refresh to complete before retrying the request
                    const resp=await fetch(`${baseUrl}/accounts/token/refresh/`, {
                        method: "POST",
                        credentials: "include",
                    })
                    await resp.json();
                    if (resp.ok) {
                        await updateUserInfo();
                        return axiosInstance(originalRequest);
                    }
                    else {
                        innerLogout();
                    }

                } catch (err) {
                    // If token refresh fails, log the user out
                    innerLogout();
                    return Promise.reject(error);
                }
            }

            // If the error is not due to a 401 status code, reject the promise
            return Promise.reject(error);
        }
    );

    return axiosInstance;
};

export default useAxios;
