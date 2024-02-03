import SearchBox from "../components/common/SearchBox";
import { TfiHelpAlt } from "react-icons/tfi";
import AppBarLink from "./AppBarLink";
import DefaultAvater from "../assets/images/default.webp";
import { AuthContext } from "../context/AuthContext";
import { useContext,useState } from "react";


import { BsSearch } from "react-icons/bs";
const AppBar = () => {

    const [dropOut, setDropOut] = useState(false)

    const {logout } = useContext(AuthContext);
    const handleLogout=()=>{
        logout();
        setDropOut(false);
    }


    return (
        <>
            <header className="relative overflow-hidden h-32">
                <nav className="bg-white  w-full pt-4  flex items-center flex-col fixed top-0 left-0 z-40">
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
                                <div className="grid grid-cols-3 gap-4 sm:grid-col-1">
                                    <button className="sm:hidden">
                                        <BsSearch className="w-6 h-6 text-gray-600" />
                                    </button>
                                    <div className="relative cursor-pointer" onClick={()=>setDropOut(!dropOut)}>
                                        <img src={DefaultAvater} alt="" className="w-10 h-10 rounded-full" />
                                        <div className={`absolute z-30 w-32 right-0 rounded-xl shadow ${dropOut?"":"hidden"} bg-gray-100 p-4`}>
                                            <button onClick={handleLogout}>Logout</button>
                                        </div>
                                    </div>
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
