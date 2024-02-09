import { DrawerContext } from "../context/DrawerContext";
import { useContext } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import { TopBarContext } from "../context/TopBarContext";
import { IoMdArrowRoundBack } from "react-icons/io";


const AppBar = () => {
    const { toggleSidebar } = useContext(DrawerContext);
    const {title,back } = useContext(TopBarContext);

    return (
        <header>
            <nav className="bg-primary-900 z-30 h-16 flex items-center justify-center fixed mb-8 top-0 left-0 w-full border-b border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl w-full justify-between flex  items-center  mx-auto px-4 py-2">
                    <Link
                        to="/account/home"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <span className="self-center text-xl text-white whitespace-nowrap dark:text-white">
                            Waanverse Accounts
                        </span>
                    </Link>

                    <div className="md:flex items-center  hidden text-white">
                        {back && (
                            <button onClick={() => history.back()}>
                                <IoMdArrowRoundBack className="w-6 h-6" />
                            </button>)}
                            <p className="ml-1">{title}</p>
                        </div>


                    <div className="flex md:hidden md:order-2 md:w-1/2 ml-[10%] ">
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
            <div className="h-24"></div>
        </header>
    );
};

export default AppBar;
