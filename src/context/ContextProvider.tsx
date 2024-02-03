import AuthContextProvider from "./AuthContext";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import StepContextProvider from "./StepContext";


const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <AuthContextProvider>
            <HelmetProvider>
                <QueryClientProvider client={new QueryClient()}>
                    <StepContextProvider>
                        {children}
                    </StepContextProvider>
                </QueryClientProvider>
            </HelmetProvider>
        </AuthContextProvider>
    );
};

export default ContextProvider;
