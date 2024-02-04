import AuthContextProvider from "./AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import StepContextProvider from "./StepContext";
import DrawerProvider from "./DrawerContext";
import { HelmetProvider } from "react-helmet-async";

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <AuthContextProvider>
            <HelmetProvider>
                <DrawerProvider>
                <QueryClientProvider client={new QueryClient()}>
                    <StepContextProvider>
                        {children}
                    </StepContextProvider>
                    </QueryClientProvider>
                </DrawerProvider>
                </HelmetProvider>
        </AuthContextProvider>
    );
};

export default ContextProvider;
