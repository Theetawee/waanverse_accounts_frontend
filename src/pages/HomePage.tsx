import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import Lock from "../assets/images/lock.webp";
import BasicFooter from "../components/common/BasicFooter";
import Seo from "../components/utils/Seo";

const HomePage = () => {
    return (
        <Seo
            title="Waanverse Accounts | Sign In or Create your Account today!"
            description="Manage and control your authentication flow with Waanverse Accounts. Streamlined user authentication, secure access, and personalized user profiles.p"
        >
            <section className="h-full bg-homebg overflow-x-hidden">
                <section className=" bg-white/50">
                    <div className="p-10 flex items-center justify-between">
                        <Link to="/">
                            <img
                                src={Logo}
                                alt="Waanverse"
                                className="w-12 rounded  h-12"
                            />
                        </Link>
                        <Link
                            className="text-white font-medium bg-gray-800 hover:shadow hover:bg-gray-800/90 px-5 py-2 rounded-full"
                            to="/login"
                        >
                            Sign in
                        </Link>
                    </div>

                    <section className="dark:bg-gray-900">
                        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:px-12">
                            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                                Elevate Your Online Experience with{" "}
                                <span className="text-primary-600 underline-offset-8 underline">
                                    Waanverse&nbsp;Accounts
                                </span>
                            </h1>
                            <p className="mb-8   font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                                Seamlessly manage your authentication process
                                across all Waanverse products and services.
                                Benefit from centralized account management,
                                robust security measures, and effortless access
                                to our cutting-edge solutions.
                            </p>

                            <div className="flex items-center flex-wrap justify-between">
                                <div className="mx-auto">
                                    <img
                                        src={Lock}
                                        alt="Secure Authentication with Waanverse"
                                    />
                                </div>
                                <div className="mx-auto">
                                    <h2 className="text-left text-3xl mb-4">
                                        Experience the Advantage
                                    </h2>
                                    <ul className="list-disc text-left px-4   text-gray-700">
                                        <li>
                                            Streamlined user authentication
                                            process
                                        </li>
                                        <li>
                                            Secure access to Waanverse products
                                            and services
                                        </li>
                                        <li>
                                            Personalized user profiles and
                                            preferences
                                        </li>
                                        <li>
                                            Effortless account recovery and
                                            password management
                                        </li>
                                    </ul>
                                    <div className="py-10">
                                        <h3 className="text-3xl">
                                            Keeping your information private,
                                            safe, and secure
                                        </h3>
                                        <p className=" ">
                                            Your account helps you do more by
                                            personalizing your Waanverse
                                            experience and offering easy access
                                            to your most important information
                                            from anywhere.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                <section className="min-h-[50vh] px-6 bg-page-pattern bg-white py-10 flex flex-col justify-center items-center">
                    <div className="mb-20">
                        <h2 className="text-center text-4xl font-bold text-primary-600">
                            Your Waanverse experience starts here...
                        </h2>
                    </div>
                    <div className="flex items-center justify-center flex-col px-4">
                        <div className="flex flex-wrap justify-center space-y-5 md:space-y-0 md:justify-between items-center">
                            <Link
                                to={"/signup"}
                                type="button"
                                className="text-white text-center w-full md:w-auto bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 font-medium rounded-full   px-8 py-3 text-lg dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                            >
                                Join Waanverse now
                            </Link>
                        </div>
                    </div>
                    <div className="py-6">
                        <BasicFooter />
                    </div>
                </section>
            </section>
        </Seo>
    );
};

export default HomePage;
