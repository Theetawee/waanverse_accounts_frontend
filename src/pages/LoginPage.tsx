import { Link } from "react-router-dom";
import Input from "../components/common/Input";
import { FaLock } from "react-icons/fa";
import useLogin from "../hooks/useLogin";
import Loader from "../components/common/Loader";

const LoginPage = () => {
    const { login, isLoading } = useLogin();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;
        login(email, password);
    };

    return (
        <section
            className="h-full overflow-x-hidden "
        >
            <div className="h-screen bg-gray-100/40 px-4 flex items-center justify-center">
                <div className="p-4 w-full mx-auto rounded-xl max-w-md shadow bg-white">
                    <form method="post" onSubmit={handleSubmit}>
                        <div className="grid space-y-6 grid-cols-1">
                            <div className="w-full flex items-center flex-col justify-center">
                                <span>
                                    <FaLock className="text-gray-600 w-8 h-8 mb-6 text-center flex items-center justify-center" />
                                </span>
                                <h1 className="text-3xl">
                                    Login to your WaanVerse Account
                                </h1>
                            </div>

                            <div>
                                <Input
                                    type="email"
                                    name="email"
                                    label="Email"
                                    disabled={isLoading}
                                />
                            </div>
                            <div>
                                <Input
                                    type="password"
                                    name="password"
                                    label="Password"
                                    disabled={isLoading}
                                />
                            </div>
                            <div className="max-w-sm text-center mx-auto w-full">
                                <button
                                    disabled={isLoading}
                                    type="submit"
                                    className="bg-primary-600 disabled:cursor-progress hover:bg-primary-700 text-white font-bold py-2 px-4 rounded w-full"
                                >
                                    {isLoading ? <Loader fill="white"/> : "Login"}
                                </button>
                            </div>
                            <div>
                                <div className="flex items-center">
                                    <div>
                                        <p>
                                            You can{" "}
                                            <Link
                                                className="text-primary-600 hover:underline"
                                                to="/signup"
                                            >
                                                Register
                                            </Link>{" "}
                                            a new account or click here if you{" "}
                                            <Link
                                                to="/reset-password"
                                                className="text-primary-600 hover:underline"
                                            >
                                                Forgot&nbsp;your&nbsp;Password
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
