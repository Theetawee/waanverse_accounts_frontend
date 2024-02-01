import { Link } from "react-router-dom";
import Bg from "../assets/images/bg.svg";
import Input from "../components/common/Input";
import { FaLock } from "react-icons/fa";
const LoginPage = () => {
    return (
        <section
            className="h-full overflow-x-hidden px-4"
            style={{ backgroundImage: `url(${Bg})` }}
        >
            <div className="h-screen bg-gray-100/40 flex items-center justify-center">
                <div className="p-4 w-full mx-auto rounded-xl max-w-md shadow bg-white">
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
                                disabled={false}
                            />
                        </div>
                        <div>
                            <Input
                                type="password"
                                name="password"
                                label="Password"
                                disabled={false}
                            />
                        </div>
                        <div className="max-w-sm text-center mx-auto w-full">
                            <button className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded w-full">
                                Login
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
                                            to="/forgot-password"
                                            className="text-primary-600 hover:underline"
                                        >
                                            Forgot&nbsp;your&nbsp;Password
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
