import { useState } from "react";
import useAxios from "../useAxios";
import toast from "react-hot-toast";
import useAuth from "./useAuth";

const useLogout = () => {
    const { setUserInfo, setIsAuthenticated } = useAuth();
    const [loging, setLoging] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const [message, setMessage] = useState(
        "Hangon a moment while we log you out..."
    );
    const [subtext, setSubtext] = useState("logging out...");

    const api = useAxios();

    const LogoutUser = async () => {
        setLoging(true);
        try {
            const response = await api.post("/accounts/logout/");
            const data = response.data;
            console.log(data);
            toast.success("Logout successful");
            localStorage.removeItem("__uD");
            setIsSuccess(true);
            setUserInfo(null);
            setIsAuthenticated(false);
            setMessage("You signed out of your account");
            setSubtext("It's a good idea to close all browser windows.");
        } catch (error) {
            console.log(error);
            toast.error("Hmm... We are having trouble logging you out ");
            setMessage("Hmm... We are having trouble logging you out.");
            setSubtext("Please try again by refreshing the page.");
        } finally {
            setLoging(false);
        }
    };

    return {
        LogoutUser,
        loging,
        isSuccess,
        message,
        subtext,
    };
};

export default useLogout;
