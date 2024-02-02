import SearchBox from "../components/common/SearchBox";
import { TfiHelpAlt } from "react-icons/tfi";
import AppBarLink from "./AppBarLink";
import { BsSearch } from "react-icons/bs";
const AppBar = () => {
    return (
        <>
            <header className="relative overflow-hidden h-32">
                <nav className="bg-white  w-full pt-4  flex items-center flex-col fixed top-0 left-0 z-30">
                    <div className="flex px-4 w-full items-center justify-center">
                        <div className="flex items-center w-full justify-between">
                            <div className="md:w-1/2 w-full">
                                <h1 className="text-xl text-nowrap overflow-ellipsis max-w-20  text-gray-600">
                                    Waanverse Accounts
                                </h1>
                            </div>
                            <div className="px-6 hidden sm:block w-full">
                                <SearchBox />
                            </div>
                            <div className="w-1/2 justify-end flex items-center ml-auto">
                                <div className="grid grid-cols-2 gap-4 sm:grid-col-1">
                                    <button className="sm:hidden">
                                        <BsSearch className="w-6 h-6 text-gray-600" />
                                    </button>
                                    <button>
                                        <TfiHelpAlt className="w-6 h-6 text-gray-600" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 overflow-x-hidden border-b border-gray-100 pt-6">
                        <div className="w-full  overflow-auto max-w-lg mx-auto">
                            <span>
                                <AppBarLink path="/account" label="Home" />
                            </span>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default AppBar;
