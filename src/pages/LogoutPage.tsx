import { useEffect, useRef } from "react";
import useLogout from "../hooks/Auth/useLogout";
import Loader from "../components/common/Loader";
import { Link } from "react-router-dom";
import Seo from "../components/utils/Seo";

const LogoutPage = () => {
    const { LogoutUser:logout,loging,isSuccess,message,subtext } = useLogout();

    const effectRan = useRef(false);



    useEffect(() =>{
        if (!effectRan.current) {
            logout();
            effectRan.current = true;
        }
    }, [logout]);


    return (
        <Seo title="Logout - Waanverse Accounts" description="You can log out of your Waanverse account and sign in again to continue using Waanverse.">
        <section className="h-screen flex px-2 items-center justify-center">
            <div className="max-w-lg w-full h-72 bg-white border border-gray-200 rounded mx-auto p-8 shadow-md">
                <div className="text-center">
                    <h2 className="text-2xl text-gray-700 font-bold mb-4">
                        {message}
                    </h2>
                    {loging && <Loader fill="primary-500"/>}

                    <p className="text-gray-500">
                        {subtext}
                    </p>
                    {isSuccess && (
                        <Link className="text-primary-500 hover:underline pt-10 block mt-8" to="/">
                            Go to Home
                        </Link>)}
                </div>
            </div>
            </section>
            </Seo>    );
};

export default LogoutPage;
