import { useContext } from "react";
import { Link } from "react-router-dom";
import { DrawerContext } from "../context/DrawerContext";

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
                className={`fixed top-0 border-r sm:border-0 sm:pt-20 border-gray-100 dark:border-gray-800 left-0 z-50 w-5/6 sm:w-[30%] md:w-[25%]   h-screen transition-transform -translate-x-full ${
                    isOpen ? "translate-x-0" : "sm:translate-x-0"
                } `}
                aria-label="Sidebar"
            >
                {/* Sidebar Content */}
                <div className="h-full px-3 relative py-4   bg-white dark:bg-gray-900">
                    {/* Waanverse Logo */}
                    <Link
                        to="/"
                        onClick={toggleSidebar}
                        className="justify-center text-center flex items-center mb-8"
                    >
                        image
                    </Link>


                </div>
            </aside>
        </>
    );
};
export default Frame;
