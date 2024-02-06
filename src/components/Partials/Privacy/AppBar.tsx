import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo.svg";
const AppBar = () => {
    return (
        <header className="p-4 bg-white">
            <nav className="flex max-w-2xl mx-auto items-center justify-between">
                <div>
                    <Link to={"/"} className="flex items-center">
                        <img
                            src={Logo}
                            alt="Waanverse Accounts"
                            className="w-10 h-10"
                        />
                        <span className="ml-1 text-lg">Waanverse Accounts</span>
                    </Link>
                </div>
                <div>
                    <p>Privacy Policy</p>
                </div>
            </nav>
        </header>
    );
};

export default AppBar;
