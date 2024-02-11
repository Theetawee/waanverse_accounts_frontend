import { createContext, useState, ReactNode, useEffect, Dispatch } from "react";
import utils from "../hooks/utils";
import { UserType } from "../hooks/types";
const baseUrl = import.meta.env.VITE_BASE_URL;
import OfflineAlert from "../components/common/OfflineAlert";
import LoadingState from "../components/common/LoadingState";
import useIsOnline from "../hooks/utils/useIsOnline";


interface AuthContextDataType {
    isAuthenticated: boolean;
    userInfo: UserType | null;
    setFastRefresh: Dispatch<React.SetStateAction<boolean>>;
    isOnline: boolean;
    AuthenticateUser: (user: UserType) => void;
    logout: () => void;
    setUserInfo: Dispatch<React.SetStateAction<UserType | null>>;
    setIsAuthenticated:Dispatch<React.SetStateAction<boolean>>
}







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
    setUserInfo: () => { },
    setIsAuthenticated:()=>{}
});



const AuthProvider = ({ children }: AuthProviderProps) => {
    const { encryptData, decryptData } = utils();
    const isOnline = useIsOnline();

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



    const UnauthenticateUser: () => Promise<void> = async () => {
        const resp=await fetch(`${baseUrl}/accounts/logout/`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if(resp.ok) {
            setIsAuthenticated(false);
            setUserInfo(null);
            localStorage.removeItem("__uD");
        }
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
            } catch (error) {
                console.error("Error fetching user info", error);
            }
        };

        const RefreshToken = async () => {
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
                        setIsAuthenticated(false);
                        setUserInfo(null);
                        localStorage.removeItem("__uD");
                    }
                }

        };

        if (fastRefresh) {
            RefreshToken();
            setFastRefresh(false);
        }
        if (userInfo === null) {
            UnauthenticateUser();
            setIsLoading(false);
        } else {
            setIsLoading(false);
        }
    }, [encryptData, fastRefresh, userInfo]);

    const contextData: AuthContextDataType = {
        isAuthenticated,
        userInfo,
        AuthenticateUser,
        setFastRefresh,
        isOnline,
        logout: UnauthenticateUser,
        setUserInfo,
        setIsAuthenticated
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
