import { createContext, useEffect, useState } from "react";
import useLogin from "../hooks/Auth/useLogin";
import useIsOnline from "../hooks/utils/useIsOnline";
import { UserType } from "../hooks/types";
import OfflineAlert from "../components/common/OfflineAlert";
import LoadingState from "../components/common/LoadingState";
import RedirectToApp from "../components/Partials/LinkedApps/RedirectToApp";
const baseURL = import.meta.env.VITE_BASE_URL;

interface AuthContextType {
    LoginUser: (email: string, password: string) => void;
    loging: boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    isAuthenticated: boolean;
    setUserInfo: React.Dispatch<React.SetStateAction<UserType | null>>
    userInfo:UserType|null
}






export const AuthContext = createContext<AuthContextType>({
    LoginUser: () => { },
    loging: false,
    setIsAuthenticated: () => { },
    isAuthenticated: false,
    setUserInfo: () => { },
    userInfo: null
});







const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        const auth = localStorage.getItem("authenticated");
        if (auth === "true") {
            return true;
        } else {
            return false;
        }
    });

    const isOnline = useIsOnline();

    const [isLoading, setIsLoading] = useState(true);

    const [userInfo, setUserInfo] = useState<UserType|null>(null);


    const { LoginUser, loging,isSuccess,user } = useLogin();

    const [redirect, setRedirect] = useState(false);


    useEffect(() => {
        if (isSuccess === true && user!==null) {
            setIsAuthenticated(true);
            setUserInfo(user);
        }
    }, [isSuccess, user])



    useEffect(() => {

        const fetchUserInfo= async ()=>{
            try {
                const response = await fetch(`${baseURL}/accounts/me/`, {
                    method: "GET",
                    credentials: "include",
                })
                const data = await response.json();
                console.log(response)
                if (response.status === 401) {
                    setIsAuthenticated(false);
                    localStorage.removeItem("authenticated");
                    setUserInfo(null);
                } else {
                    setUserInfo(data);
                }
            } catch(err) {
                console.log(err);
            }finally {
                setIsLoading(false);
            }
        }

        const ResfreshToken = async () => {
            try {
                await fetch(`${baseURL}/accounts/token/refresh/`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                })
                await fetchUserInfo()
            } catch(err) {
                console.log(err)
            }
        }

        if (isLoading && isAuthenticated) {
            ResfreshToken();
        } else {
            setIsLoading(false);
        }



    }, [isAuthenticated, isLoading])




useEffect(() => {
    if (isAuthenticated && !isLoading && userInfo !== null) {
        const redirect_uri = localStorage.getItem("redirect_uri");
        const linked_app = localStorage.getItem("linked_app");
        if (redirect_uri && linked_app) {
            setRedirect(true);
        } else {
            setRedirect(false);
        }
    }
},[isAuthenticated, isLoading, userInfo])






const contextData: AuthContextType = {
    LoginUser,
    loging,
    setIsAuthenticated,
    isAuthenticated,
    setUserInfo,
    userInfo
}

    return (
        <AuthContext.Provider value={contextData}>
            {isLoading ? (<LoadingState />) : (<>
                {redirect && <RedirectToApp/>}
                {!isOnline && <OfflineAlert />}
                {children}</>)}
        </AuthContext.Provider>
    )

}


export default AuthContextProvider;
