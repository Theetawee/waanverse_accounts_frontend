import { useContext, useEffect,useState } from "react";
import { AuthContext } from "../context/AuthContext";

const LogoutPage = () => {
    const { logout} = useContext(AuthContext);
    const [message, setMessage] = useState("Hangon a moment while we log you out...");
    const [subtext, setSubtext] = useState("logging out...");

    useEffect(() =>{

            const logoutUser=async()=>{
                try {
                    await logout();
                    setMessage("You signed out of your account");
                    setSubtext("It's a good idea to close all browser windows.");
                } catch {
                    setMessage("Hmm... We are having trouble logging you out.");
                    setSubtext("Please try again by refreshing the page.");
                }
            }
            logoutUser();
    }, [logout]);


    return (
        <section className="h-screen flex px-4 items-center justify-center">
            <div className="max-w-lg w-full h-72 bg-white border border-gray-200 rounded mx-auto p-8 shadow-md">
                <div>
                    <h2 className="text-2xl text-gray-700 font-bold mb-4">
                        {message}
                    </h2>
                    <p className="text-gray-500">
                        {subtext}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default LogoutPage;
