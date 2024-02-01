import { Dispatch, createContext, useEffect, useState } from "react";
import utils from "../hooks/utils";
import { User } from "../hooks/useTypes";
interface AuthContextInterface {
    isAuthenticated: boolean;
    AuthenticateUser: (user: User) => void;
    userData: User | null;
    setUserData: Dispatch<React.SetStateAction<User | null>>
}

export const AuthContext = createContext<AuthContextInterface>({
    isAuthenticated: false,
    AuthenticateUser: () => {},
    userData: null,
 setUserData: () => {}
});

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
    const { encryptData, decryptData } = utils();

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
        localStorage.setItem("__uD", encryptData(user));
        localStorage.setItem("__ts", new Date().getTime().toString());
        setIsAuthenticated(true);
        setUserData(user);
    };



    useEffect(() => {
        const LogoutUser = async () => {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/accounts/logout/`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (response.status === 200) {
                localStorage.removeItem("__uD");
                localStorage.removeItem("__ts");
                setIsAuthenticated(false);
                setUserData(null);
            }
        };

        if (!userData) {
            LogoutUser();
        }
    }, [userData]);

    const contextData: AuthContextInterface = {
        isAuthenticated,
        AuthenticateUser,
        userData,
        setUserData
    };

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
