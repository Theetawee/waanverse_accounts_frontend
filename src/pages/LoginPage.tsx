import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import Loader from "../components/common/Loader";
import BasicFooter from "../components/common/BasicFooter";
import TextInput from "../components/common/Inputs/TextInput";
import Seo from "../components/utils/Seo";
import useLogin from "../hooks/Auth/useLogin";






const LoginPage = () => {
    const { LoginUser: login,loging:isLoading } = useLogin();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;
        login( email, password );
    };

    return (
        <Seo
            title="Secure Login to Your WaanVerse Account - Access a World of Connections"
            description="Log in to your WaanVerse account with confidence. Your gateway to a world of seamless connections, personalized experiences, and innovative collaborations. Join the WaanVerse community and explore a new dimension of online interaction"
        >
            <section className="h-full overflow-x-hidden ">
                <div className="h-screen flex-col bg-gray-50/40 border-gray-50 px-2 flex items-center justify-center">
                    <span>
                        <FaLock className="text-gray-600 w-8 h-8 mb-6 text-center flex items-center justify-center" />
                    </span>
                    <div className="p-4  w-full mx-auto shadow rounded max-w-md border bg-white">
                        <form method="post" onSubmit={handleSubmit}>
                            <div className="grid space-y-6 grid-cols-1">
                                <div className="w-full flex items-center flex-col justify-center">
                                    <h1 className="text-xl font-medium">
                                        Login to your Waanverse Account
                                    </h1>
                                </div>

                                <div className="mb-4">
                                    <TextInput
                                        type="email"
                                        label="Email"
                                        disabled={isLoading}
                                        id="waanverse_email"
                                        name="email"
                                    />
                                </div>
                                <div>
                                    <TextInput
                                        auto_on={false}
                                        type="password"
                                        label="Password"
                                        disabled={isLoading}
                                        id="waanverse_password"
                                        name="password"
                                    />
                                </div>
                                <div>
                                    <button
                                        disabled={isLoading}
                                        type="submit"
                                        className="bg-primary-600 disabled:cursor-progress hover:bg-primary-600/90 text-white py-2 px-5 rounded w-32"
                                    >
                                        {isLoading ? (
                                            <Loader fill="white" />
                                        ) : (
                                            "Login"
                                        )}
                                    </button>
                                </div>
                                <div>
                                    <div className="flex items-center text-gray-700">
                                        <div>
                                            <p className="text-sm">
                                                No account?{" "}
                                                <Link
                                                    className="text-primary-600 hover:underline"
                                                    to="/signup"
                                                >
                                                    Create one!
                                                </Link>
                                            </p>
                                            <p className="text-sm mt-1">
                                                <Link
                                                    to="/reset-password"
                                                    className="text-primary-600 hover:underline"
                                                >
                                                    Forgot&nbsp;your&nbsp;Password?
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <BasicFooter />{" "}
                </div>
            </section>
        </Seo>
    );
};

export default LoginPage;
