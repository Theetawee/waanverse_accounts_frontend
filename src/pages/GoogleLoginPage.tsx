import { useContext, useEffect, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Loader from "../components/common/Loader";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";

const GoogleLoginPage = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const { AuthenticateUser} = useContext(AuthContext);
    const code = searchParams.get('code');


    const effectRan = useRef(false);
    useEffect(() => {
        if (effectRan.current) return;
        if (code) {
            const activate = async () => {
                try {
                    const resp = await fetch(
                        `${import.meta.env.VITE_BASE_URL}/accounts/google/`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                code: code,
                            }),
                        }
                    );
                    if (resp.ok) {
                        toast.success("Login successful");
                        const data = await resp.json();
                        AuthenticateUser(data.user);
                    } else {
                        toast.error("Login failed");
                        return navigate("/login");
                    }
                } catch (error) {
                    toast.error("Unable to login");
                    return navigate("/login");
                }
            };
            activate();
        } else {
            navigate("/");
        }
        effectRan.current = true;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section className="h-screen flex items-center justify-center ">
            <div>
                <Loader />
                <p className="text-gray-700">logging in</p>
            </div>
        </section>
    );
};

export default GoogleLoginPage;
