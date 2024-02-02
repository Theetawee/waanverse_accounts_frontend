import AuthContextProvider from "./AuthContext";
import { HelmetProvider } from "react-helmet-async";

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <AuthContextProvider>
            <HelmetProvider>{children}</HelmetProvider>
        </AuthContextProvider>
    );
};

export default ContextProvider;
