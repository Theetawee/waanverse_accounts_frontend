import { useState, useEffect } from "react";
import Loader from "./Loader";
import { MdRunningWithErrors } from "react-icons/md";




const LoadingState = () => {
  const [showRefreshButton, setShowRefreshButton] = useState(false);
  const [text, setText] = useState("Connecting ...");
  const[icon,setIcon]=useState(<Loader fill="primary-600"/>)

    useEffect(() => {
        const timeout = setTimeout(() => {
          setShowRefreshButton(true);
          setText("Taking longer than expected. Please refresh the page.");
          setIcon(<MdRunningWithErrors className=" text-rose-600 mb-20 w-20 h-20"/>);
        }, 100000);

        return () => clearTimeout(timeout);
    }, []);

    const handleRefresh = () => {
        window.location.reload();
    };

    return (
        <section className="h-screen py-10 flex-col fixed left-0 bottom-0 z-50 w-full flex items-center bg-white justify-center">
            {icon}
            <p>{text}</p>
            {showRefreshButton && (
                <button
                    className="mt-4 px-5 py-2 bg-primary-600 text-white rounded hover:bg-primary-700"
                    onClick={handleRefresh}
                >
                    Refresh
                </button>
            )}
        </section>
    );
};

export default LoadingState;
