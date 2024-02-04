import { Outlet } from "react-router-dom";
import SuspenseLoader from "../components/utils/SuspenseLoader";
import ContextProvider from "../context/ContextProvider";
import AppBar from "./AppBar";
import Frame from "./Frame";

const FrameLayout = () => {
    return (
        <ContextProvider>
            <Frame/>
            <SuspenseLoader>
                <AppBar/>
            </SuspenseLoader>
            <SuspenseLoader>
                <main className="min-h-screen sm:ml-[30%] lg:ml-[25%]">
                    <Outlet />
                    </main>
            </SuspenseLoader>
        </ContextProvider>
    );
};

export default FrameLayout;
