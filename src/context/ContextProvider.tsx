import AuthContextProvider from "./AuthContext";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <AuthContextProvider>
            <HelmetProvider>
                <QueryClientProvider client={new QueryClient()}>
                    {children}
                </QueryClientProvider>
            </HelmetProvider>
        </AuthContextProvider>
    );
};

export default ContextProvider;
