import { createContext,useState } from "react";

interface AuthContextInterface {
    isAuthenticated: boolean;
}


export const AuthContext = createContext<AuthContextInterface>({
    isAuthenticated: false,
});

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [isAuthenticated] = useState(false);




    const contextData: AuthContextInterface = {
        isAuthenticated,
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
