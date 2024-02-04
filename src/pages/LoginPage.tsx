import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import useLogin from "../hooks/useLogin";
import Loader from "../components/common/Loader";
import BasicFooter from "../components/common/BasicFooter";
import TextInput from "../components/common/Inputs/TextInput";

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
            <div className="h-screen flex-col bg-gray-50/40 border-gray-50 px-4 flex items-center justify-center">
                <div className="p-4 sm:p-8 w-full mx-auto rounded-md max-w-lg border bg-white">
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
                                <TextInput type="email" label="Email" disabled={isLoading} id="waanverse_email" name="email"/>

                            </div>
                            <div>
                                <TextInput type="password" label="Password" disabled={isLoading} id="waanverse_password" name="password"/>

                            </div>
                            <div>
                                <button
                                    disabled={isLoading}
                                    type="submit"
                                    className="bg-primary-600 disabled:cursor-progress hover:bg-primary-700 text-white font-bold py-2.5 px-5 rounded w-20"
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
                <BasicFooter/>            </div>
        </section>
    );
};

export default LoginPage;
