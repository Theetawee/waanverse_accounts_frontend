import Welcome from "../assets/images/hello.png";
import Bg from "../assets/images/bg.svg";

const HomePage = () => {
    return (
        <>
            <section
                className="h-full overflow-x-hidden"
                style={{ backgroundImage: `url(${Bg})` }}
            >
                <section className="min-h-screen py-10 px-6 flex items-center justify-center bg-gray-100/60">
                    <div className="flex flex-wrap justify-between items-center w-full max-w-6xl">
                        <div className="sm:w-1/2 w-full mb-8 sm:mb-0">
                            <h1 className="sm:text-left py-4 text-center text-5xl font-bold mb-4 text-primary-600">
                                WaanVerse Accounts
                            </h1>
                            <div className="sm:hidden mb-10 w-full">
                                <img
                                    src={Welcome}
                                    alt="Welcome to Waanverse Accounts"
                                    className="rounded-lg w-[70%] mx-auto"
                                />
                            </div>

                            <p className="text-gray-700 text-lg">
                                Manage and control your authentication flow with
                                all Waanverse Products and services in one
                                place. Enjoy the convenience of centralized
                                account management, secure authentication, and
                                seamless access to our innovative solutions.
                            </p>
                            <ul className="list-disc px-4 text-lg mt-4 text-gray-700">
                                <li>Streamlined user authentication process</li>
                                <li>
                                    Secure access to Waanverse Products and
                                    services
                                </li>
                                <li>
                                    Personalized user profiles and preferences
                                </li>
                                <li>
                                    Effortless account recovery and password
                                    management
                                </li>
                            </ul>
                        </div>
                        <div className="sm:w-1/2 sm:flex hidden">
                            <img
                                src={Welcome}
                                alt="Welcome to Waanverse Accounts"
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                </section>
                <section className="h-screen flex flex-col justify-center items-center px-6">
                    <div className="mb-20">
                        <h2 className="text-center text-4xl font-bold text-primary-600">
                            Get started with WaanVerse Accounts
                        </h2>
                    </div>
                    <div className="flex flex-wrap justify-center space-y-5 sm:space-y-0 sm:justify-between items-center">
                        <button
                            type="button"
                            className="text-white w-full sm:w-auto bg-primary-700 hover:bg-primary-800  focus:ring-primary-300 font-medium rounded-lg text-lg px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                        >
                            Create account
                        </button>
                        <button
                            type="button"
                            className="py-2.5 w-full sm:w-auto sm:ml-10 px-5 text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10  focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                            Login to account
                        </button>
                    </div>
                </section>
            </section>
        </>
    );
};

export default HomePage;
