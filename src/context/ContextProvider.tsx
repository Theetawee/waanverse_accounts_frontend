import AuthContextProvider from "./AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import StepContextProvider from "./StepContext";
import DrawerProvider from "./DrawerContext";
import { HelmetProvider } from "react-helmet-async";
import TopBarContextProvider from "./TopBarContext";
import ModalProvider from "./ModalContext";



const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    return (
            <AuthContextProvider>
                <HelmetProvider>
                    <DrawerProvider>
                        <ModalProvider>
                        <QueryClientProvider client={new QueryClient()}>
                            <TopBarContextProvider>
                                <StepContextProvider>
                                    {children}
                                </StepContextProvider>
                            </TopBarContextProvider>
                            </QueryClientProvider>
                        </ModalProvider>
                    </DrawerProvider>
                </HelmetProvider>
                </AuthContextProvider>
    );
};

export default ContextProvider;
