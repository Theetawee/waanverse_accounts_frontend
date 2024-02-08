import AuthContextProvider from "./AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import StepContextProvider from "./StepContext";
import DrawerProvider from "./DrawerContext";
import { HelmetProvider } from "react-helmet-async";
import SuspenseLoader from "../components/utils/SuspenseLoader";
import TopBarContextProvider from "./TopBarContext";
const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <SuspenseLoader>
            <AuthContextProvider>
                <HelmetProvider>
                    <DrawerProvider>
                        <QueryClientProvider client={new QueryClient()}>
                            <TopBarContextProvider>
                                <StepContextProvider>
                                    {children}
                                </StepContextProvider>
                            </TopBarContextProvider>
                        </QueryClientProvider>
                    </DrawerProvider>
                </HelmetProvider>
            </AuthContextProvider>
        </SuspenseLoader>
    );
};

export default ContextProvider;
