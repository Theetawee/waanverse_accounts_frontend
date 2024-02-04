import { DrawerContext } from "../context/DrawerContext";
import { useContext } from "react";
import { CiMenuFries } from "react-icons/ci";


const AppBar = () => {
    const { toggleSidebar, showDrawer } = useContext(DrawerContext);

    const isAuthenticated = true;



    return (
        <>
            <header
                className={`bg-transparent relative  sm:z-[50]   left-0 overflow-hidden shadow border-b dark:border-gray-800/30 border-gray-100/30 mb-14 _div shadow-gray-100/30 dark:shadow-gray-800/30 lg:mr-[30%]`}
            >
                <nav
                    className={` fixed top-0 pt-4 flex items-center justify-center w-full shadow-sm z-30  shadow-gray-100/50 dark:shadow-gray-800/50 dark:bg-gray-900 bg-white`}
                >
                    <div className="grid grid-cols-3 _div w-full gap-x-2 p-4">
                        <div className="flex items-center h-full justify-start "></div>
                        <div className="sm:hidden flex items-center justify-center">
                            logo
                        </div>
                        {!showDrawer && (
                            <div className="h-7 flex items-center justify-end">
                                <button className="" onClick={toggleSidebar}>
                                    {isAuthenticated ? (
                                        <>
                                            <CiMenuFries className="w-6 h-6" />
                                        </>
                                    ) : (
                                        <CiMenuFries className="w-6 h-6" />
                                    )}
                                </button>
                            </div>
                        )}
                    </div>
                </nav>
            </header>
        </>
    );
};

export default AppBar;
