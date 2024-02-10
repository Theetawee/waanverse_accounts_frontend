import { createContext, useState, ReactNode, useEffect } from "react";
import { UserType, AuthContextDataType } from "../hooks/types";
const baseUrl = import.meta.env.VITE_BASE_URL;
import OfflineAlert from "../components/common/OfflineAlert";
import LoadingState from "../components/common/LoadingState";
import utils from "../hooks/utils";
import { useSearchParams } from "react-router-dom";


interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataType>({
    isAuthenticated: false,
    userInfo: null,
    AuthenticateUser: () => {},
    setFastRefresh: () => {},
    isOnline: navigator.onLine,
    logout: () => { },
    serverOk: false,
    innerLogout: () => {},
});

const AuthProvider = ({ children }: AuthProviderProps) => {
    const { encryptData, decryptData } = utils();
    // const duration = 1000 * 60 * 15;
    const [serverOk, setServerOk] = useState<boolean>(false);
    const [searchParams] = useSearchParams();
    const redirect_url = searchParams.get("redirect_url");
    const initialized = searchParams.get("initialized");




    const AuthenticateUser: (user: UserType) => void = (user) => {
        setIsAuthenticated(true);
        setUserInfo(user);
        const userData = encryptData(user);
        localStorage.setItem("__uD", userData);
    };

    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        const user = localStorage.getItem("__uD");
        return user ? true : false;
    });

    const [fastRefresh, setFastRefresh] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [userInfo, setUserInfo] = useState<UserType | null>(() => {
        const user = localStorage.getItem("__uD");
        if (user) {
            const userData = decryptData(user);
            return userData;
        } else {
            return null;
        }
    });
    const [isOnline, setIsOnline] = useState(navigator.onLine);


    const UnauthenticateUser= async () => {
        const resp=await fetch(`${baseUrl}/accounts/logout/`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await resp.json();
        if (resp.ok) {
            setIsAuthenticated(false);
            setUserInfo(null);
            localStorage.removeItem("__Ts");
            localStorage.removeItem("__uD");
        }
        return data;
    };

    const UnauthenticateUserInner = async () => {
        setIsAuthenticated(false);
        setUserInfo(null);
        localStorage.removeItem("__Ts");
        localStorage.removeItem("__uD");
        await fetch(`${baseUrl}/accounts/logout/`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        });

    };



    useEffect(() => {
        const AuthenticateUser: (user: UserType) => void = (user) => {
            setIsAuthenticated(true);
            setUserInfo(user);
            const userData = encryptData(user);
            localStorage.setItem("__uD", userData);
        };

        const getUserInfo = async () => {
            try {
                const response = await fetch(`${baseUrl}/accounts/me`, {
                    method: "GET",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    return;
                }
                const data: UserType = await response.json();
                AuthenticateUser(data);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching user info", error);
            }
        };

        const RefreshToken = async () => {
            try {
                const response = await fetch(
                    `${baseUrl}/accounts/token/refresh/`,
                    {
                        method: "POST",
                        credentials: "include",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
                const data = await response.json();
                if (response.ok) {
                    getUserInfo();
                } else {
                    if (data.code === "token_not_valid") {
                        UnauthenticateUserInner();
                    }
                    setIsLoading(false);
                }
            } catch {
                // UnauthenticateUser();
            }
        };

        if (fastRefresh) {
            setIsLoading(true);
            RefreshToken();
            setFastRefresh(false);
        }
        if (userInfo === null && isAuthenticated) {
            UnauthenticateUserInner();
            setIsLoading(false);
        }
         else {
            setIsLoading(false);
        }

    }, [encryptData, fastRefresh, isAuthenticated, userInfo]);


    useEffect(() => {
        if (initialized==="true" && redirect_url) {
            localStorage.setItem("__redirect_url", redirect_url);
        }
    },[initialized,redirect_url])









    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);
        const getServerStatus = async () => {
            try {
                await fetch(`${baseUrl}/ping/`);
                setServerOk(true);
            } catch (error) {
                setServerOk(false);
            }
        }
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);
        getServerStatus();
        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);

    const contextData: AuthContextDataType = {
        isAuthenticated,
        userInfo,
        AuthenticateUser,
        setFastRefresh,
        isOnline,
        logout: UnauthenticateUser,
        innerLogout: UnauthenticateUserInner,
        serverOk
    };

    return (
        <AuthContext.Provider value={contextData}>
            <>
                {isLoading ? (
                    <LoadingState />
                ) : (
                    <>
                        {!isOnline && <OfflineAlert />}

                        {children}
                    </>
                )}
            </>
        </AuthContext.Provider>
    );
};

export default AuthProvider;
