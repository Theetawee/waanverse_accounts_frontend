import { Outlet } from "react-router-dom";
import SuspenseLoader from "../components/utils/SuspenseLoader";
import ContextProvider from "../context/ContextProvider";

const FrameLayout = () => {
    return (
        <ContextProvider>
            <SuspenseLoader>
                <Outlet />
            </SuspenseLoader>
        </ContextProvider>
    );
};

export default FrameLayout;
