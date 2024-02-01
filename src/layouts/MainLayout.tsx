import { Outlet } from "react-router-dom";
import SuspenseLoader from "../components/utils/SuspenseLoader";
import ContextProvider from "../context/ContextProvider";

const MainLayout = () => {
    return (
        <ContextProvider>
            <SuspenseLoader>
                <Outlet />
            </SuspenseLoader>
        </ContextProvider>
    );
};

export default MainLayout;
