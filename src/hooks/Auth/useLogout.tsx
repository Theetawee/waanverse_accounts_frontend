import { useState } from "react";
import useAxios from "../useAxios";
import toast from "react-hot-toast";
import useAuth from "./useAuth";

const useLogout = () => {
    const { setUser,setIsAuthenticated } = useAuth();
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
            await api.post("/accounts/logout/");
            toast.success("Logout successful");
            localStorage.clear();
            setIsSuccess(true);
            setUser(null);
            setIsAuthenticated(false);
            setMessage("You signed out of your account");
            setSubtext("You can log back in anytime to access your account.");
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
