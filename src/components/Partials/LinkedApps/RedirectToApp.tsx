import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";





const RedirectToApp = () => {



    const {userInfo} = useContext(AuthContext);

    const [redirect_uri] = useState<string | null>(()=> {
        const uri = localStorage.getItem("redirect_uri");
        return uri ? uri : null;
    });

    const handleRedirect = () => {
        localStorage.removeItem("redirect_uri");
        localStorage.removeItem("linked_app");

        if(redirect_uri) {
            const url=`${redirect_uri}/accounts/continue?code=${userInfo?.access_key}&state=authenticate&user=${userInfo?.email}`;
            window.location.href = url;

        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-6 shadow-xl max-w-sm">
                <p className="text-lg font-semibold mb-4">
                    Authentication Successful
                </p>
                <p className="text-sm text-gray-600 mb-4">
                    You are now authenticated. Click the button below to
                    continue to the application.
                </p>
                <button
                    className="block w-full px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    onClick={handleRedirect} // Attach onClick handler for redirection
                >
                    Continue to Application
                </button>
            </div>
        </div>
    );
};

export default RedirectToApp;
