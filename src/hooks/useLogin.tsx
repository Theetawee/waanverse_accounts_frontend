/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useContext } from "react";
import useAxios from "./useAxios";
import { toast } from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const api = useAxios();

    const { AuthenticateUser } = useContext(AuthContext);

    const login: (email: string, password: string) => Promise<void> = async (
        email,
        password
    ) => {
        setIsLoading(true);
        try {
            const response = await api.post("/accounts/login/", {
                email,
                password,
            });
            if (response.status === 200) {
                AuthenticateUser(response.data.user);
                toast.success("Login successful");
            } else {
                toast.error("Invalid credentials! Login failed");
            }
        } catch (error: any) {
            if (
                error.response.data.non_field_errors[0] ===
                "E-mail is not verified."
            ) {
                return navigate("/verify-email?redirect_login=true");
            } else {
                toast.error("Unable to login with provided credentials");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return { login, isLoading };
};

export default useLogin;
