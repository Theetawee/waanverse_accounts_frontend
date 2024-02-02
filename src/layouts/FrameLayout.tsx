import { Outlet } from "react-router-dom";
import SuspenseLoader from "../components/utils/SuspenseLoader";
import ContextProvider from "../context/ContextProvider";
import AppBar from "./AppBar";

const FrameLayout = () => {
    return (
        <ContextProvider>
            <SuspenseLoader>
                <AppBar/>
            </SuspenseLoader>
            <SuspenseLoader>
                <main className="min-h-screen">
                    <Outlet />
                    </main>
            </SuspenseLoader>
        </ContextProvider>
    );
};

export default FrameLayout;
