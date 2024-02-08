import { IoKeyOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { TopBarContext } from "../../context/TopBarContext";
import { useContext } from "react";

const TopBar = () => {
    const { title } = useContext(TopBarContext);

    return (
        <div className="flex py-8  md:py-16 px-8 items-center justify-between">
            <div>
                <p className="text-xl font-bold">{title}</p>
            </div>
            <div className="hidden md:block">
                <div className="flex hover:text-primary-600 items-center justify-center">
                    <div className="bg-primary-600 p-2 rounded-full">
                        <IoKeyOutline className="w-5 text-white h-5" />
                    </div>
                    <Link to={"/"} className="flex ml-1 text-sm flex-col">
                        <p>Change Password</p>
                        <p>Security</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
