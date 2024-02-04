import { DrawerContext } from "../context/DrawerContext";
import { useContext} from "react";
import { MdOutlineMenu } from "react-icons/md";
import { Link } from "react-router-dom";

const AppBar = () => {
    const { toggleSidebar } = useContext(DrawerContext);

    return (
        <>
            <nav className="bg-primary-900 z-30  sticky  top-0 left-0 w-full border-b border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl justify-between flex flex-wrap items-center  mx-auto px-4 py-2">
                    <Link
                        to="/account"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <span className="self-center text-xl text-white whitespace-nowrap dark:text-white">
                            WaanVerse Accounts
                        </span>
                    </Link>
                    <div className="flex md:order-2 md:w-1/2 ml-[10%] ">
                        <button
                            onClick={toggleSidebar}
                            data-collapse-toggle="navbar-search"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500  md:hidden "
                            >
                            <span className="sr-only">Open main menu</span>
                            <MdOutlineMenu
                                className="w-6 h-6 text-white"
                                aria-hidden="true"
                            />
                        </button>
                    </div>

                </div>
            </nav>
        </>
    );
};

export default AppBar;
