import { Outlet } from "react-router-dom";
import SuspenseLoader from "../components/utils/SuspenseLoader";
import ContextProvider from "../context/ContextProvider";

const MainLayout = () => {
    return (
        <ContextProvider>
        <SuspenseLoader>
          <main className="min-h-screen">
            <Outlet />
            </main>
            </SuspenseLoader>
        </ContextProvider>
    );
};

export default MainLayout;
