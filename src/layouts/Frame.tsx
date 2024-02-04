import { useContext } from "react";
import { DrawerContext } from "../context/DrawerContext";
import Aside from "./Aside";

const Frame = () => {
    const { isOpen, toggleSidebar, showDrawer } = useContext(DrawerContext);

    return (
        <>
            {/* Dark overlay when sidebar is open */}
            {!showDrawer && isOpen && (
                <div
                    onClick={toggleSidebar}
                    className="fixed w-full h-full top-0 left-0 z-40 bg-white dark:bg-gray-800 opacity-20"
                ></div>
            )}

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 md:z-10 z-50  w-72 md:w-72  h-screen transition-transform -translate-x-full ${
                    isOpen ? "translate-x-0" : "md:translate-x-0"
                } `}
                aria-label="Sidebar"
            >
                {/* Sidebar Content */}
                <div className="h-full px-3 relative md:pt-32 py-4   bg-gray-50 dark:bg-gray-900">
                    <Aside/>
                </div>
            </aside>
        </>
    );
};
export default Frame;
