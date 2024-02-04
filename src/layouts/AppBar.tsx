import { DrawerContext } from "../context/DrawerContext";
import { useContext ,useState} from "react";
import { MdOutlineMenu } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import SearchBox from "../components/common/SearchBox";

const AppBar = () => {
    const { toggleSidebar } = useContext(DrawerContext);
    const [showSearch, setShowSearch] = useState(false);

    return (
        <>
            <nav className="bg-white z-30  sticky  top-0 left-0 w-full border-b border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl justify-between flex flex-wrap items-center  mx-auto p-4">
                    <Link
                        to="/account"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <span className="self-center text-xl text-gray-700 whitespace-nowrap dark:text-white">
                            WaanVerse Accounts
                        </span>
                    </Link>
                    {showSearch && (
                        <div className="absolute left-3 right-[30%]">
                            <SearchBox />
                        </div>)}
                    <div className="flex md:order-2 md:w-1/2 ml-[10%] ">
                        <button
                            type="button"
                            onClick={()=>setShowSearch(!showSearch)}
                            aria-expanded="false"
                            className="md:hidden text-gray-500 text-sm p-2.5 me-1"
                        >
                            <BsSearch className="w-5 h-5" aria-hidden="true" />
                            <span className="sr-only">Search</span>
                        </button>
                        <div className="relative w-full max-w-md ml-auto hidden md:block">
                            <SearchBox/>
                        </div>
                        <button
                            onClick={toggleSidebar}
                            data-collapse-toggle="navbar-search"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500  md:hidden "
                            >
                            <span className="sr-only">Open main menu</span>
                            <MdOutlineMenu
                                className="w-6 h-6"
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
