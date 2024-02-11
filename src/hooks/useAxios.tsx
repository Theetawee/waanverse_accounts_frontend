import axios, { AxiosInstance } from "axios";

const useAxios = () => {
    const baseUrl: string = import.meta.env.VITE_BASE_URL;
    const axiosInstance: AxiosInstance = axios.create({
        baseURL: baseUrl,
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
        },
    });

    return axiosInstance;
};

export default useAxios;
