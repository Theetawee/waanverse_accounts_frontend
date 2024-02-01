import AuthContextProvider from "./AuthContext";
const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    return <AuthContextProvider>{children}</AuthContextProvider>;
};

export default ContextProvider;
