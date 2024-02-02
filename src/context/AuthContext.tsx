import { Dispatch, createContext, useEffect, useState } from "react";
import utils from "../hooks/utils";
import { User } from "../hooks/useTypes";
interface AuthContextInterface {
    isAuthenticated: boolean;
    AuthenticateUser: (user: User) => void;
    userData: User | null;
    setUserData: Dispatch<React.SetStateAction<User | null>>;
    hasQuestions: boolean;
    setRefetchUser: Dispatch<React.SetStateAction<boolean>>;
    setHasQuestions: Dispatch<React.SetStateAction<boolean>>
}

export const AuthContext = createContext<AuthContextInterface>({
    isAuthenticated: false,
    AuthenticateUser: () => {},
    userData: null,
    setUserData: () => {},
    hasQuestions: false,
    setRefetchUser: () => { },
    setHasQuestions: () => { }
});

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
    const { encryptData, decryptData } = utils();
    const [refetchUser, setRefetchUser] = useState(false);
    const [isExpired, setIsExpired] = useState(
        () => {
            const lastTime_string = localStorage.getItem("__ts");
            if (lastTime_string) {
                const lastTime = parseInt(lastTime_string);
                const now = new Date().getTime();
                const diff = now - lastTime;
                //check if difference is greater than 15 mins
                if (diff > 1000*60*15) {
                    return true;
                } else {
                    return false;
                }
            }

        }
    );
    const [hasQuestions, setHasQuestions] = useState(() => {
        const encryptedData = localStorage.getItem("__uD");
        if (encryptedData) {
            const decryptedData:User = decryptData(encryptedData);
            console.log(decryptedData);
            if(decryptedData.security_question_type_one === null || decryptedData.security_question_type_one === "" || decryptedData.security_question_type_two === null || decryptedData.security_question_type_two === "") {
                return false;
            } else {
                return true;
            }

        } else {
            return false;
        }
    });
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        const encryptedData = localStorage.getItem("__uD");
        if (encryptedData) {
            return true;
        } else {
            return false;
        }
    });

    const [userData, setUserData] = useState<User | null>(() => {
        const encryptedData = localStorage.getItem("__uD");
        if (encryptedData) {
            const decryptedData = decryptData(encryptedData);
            return decryptedData;
        } else {
            return null;
        }
    });

    const AuthenticateUser = (user: User) => {
        if (
            user.security_question_type_one === null ||
            user.security_question_type_one === "" ||
            user.security_question_type_two === null ||
            user.security_question_type_two === ""
        ) {
            setHasQuestions(false);
        }
        localStorage.setItem("__uD", encryptData(user));
        localStorage.setItem("__ts", new Date().getTime().toString());
        setIsAuthenticated(true);
        setUserData(user);
    };

    useEffect(() => {
        const LogoutUser = async () => {
            const response = await fetch(
                `${import.meta.env.VITE_BASE_URL}/accounts/logout/`,
                {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            if (response.status === 200) {
                localStorage.removeItem("__uD");
                localStorage.removeItem("__ts");
                setIsAuthenticated(false);
                setUserData(null);
            }
        };

        if (!userData && isAuthenticated) {
            LogoutUser();
        }
    }, [userData]);

    useEffect(() => {
        const getUserInfo = async () => {
            const response = await fetch(
                `${import.meta.env.VITE_BASE_URL}/accounts/me/`,
                {
                    method: "GET",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            if (response.status === 200) {
                const data = await response.json();
                setUserData(data);
                AuthenticateUser(data);
            }
        };

        const refreshToken = async () => {
            const response = await fetch(
                `${import.meta.env.VITE_BASE_URL}/accounts/token/refresh/`,
                {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            if (response.status === 200) {
                console.log("refetching");
                getUserInfo();
            } else {
                setUserData(null);
            }
        };

        if (isAuthenticated && isExpired || refetchUser) {
            refreshToken();
            setRefetchUser(false);
            setIsExpired(false);
        }

        setRefetchUser(false);
    }, [refetchUser]);

    const contextData: AuthContextInterface = {
        isAuthenticated,
        AuthenticateUser,
        userData,
        setUserData,
        hasQuestions,
        setRefetchUser,
        setHasQuestions
    };

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
