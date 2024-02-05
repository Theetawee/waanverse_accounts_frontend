import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import BasicFooter from "../components/common/BasicFooter";
import { useContext } from "react";
import { StepContext } from "../context/StepContext";
import {
    StepOne,
    StepTwo,
    StepThree,
    StepFour,
    StepFive,
    StepSix,

} from "../components/Partials/SignUpSteps";
import Seo from "../components/utils/Seo";
const SignupPage = () => {
    const { step } = useContext(StepContext);

    return (
        <Seo
            title="Create Your WaanVerse Account | Secure Signup for a Unified Experience"
            description="Unlock a world of possibilities by creating your WaanVerse account. Enjoy a seamless and secure signup process, granting you access to personalized services and a unified digital experience. Join the WaanVerse community today and embark on a journey tailored just for you."
        >
            <section className="h-full overflow-x-hidden">
                <div className="min-h-screen flex-col py-16 bg-gray-50/40 px-4 flex items-center justify-center">
                    <div className="p-4 w-full shadow mx-auto rounded-md max-w-md border border-gray-100 bg-white">
                        <form method="post">
                            <div className="grid space-y-4 grid-cols-1">
                                <div className="w-full flex items-center flex-col justify-center">
                                    <span>
                                        <FaLock className="text-gray-600 w-6 h-6 mb-3 text-center flex items-center justify-center" />
                                    </span>
                                    <h1 className="text-xl text-gray-700">
                                        Create your WaanVerse Account
                                    </h1>
                                                                    </div>
                                {step === 1 && (
                                    <div>
                                        <p className="text-sm  text-gray-700">
                                            Enter your Name
                                        </p>
                                        <StepOne />
                                    </div>
                                )}
                                {step === 2 && (
                                    <div>
                                        <p className="text-sm  text-gray-700">
                                            Choose your unique username
                                        </p>

                                        <StepTwo />
                                    </div>
                                )}
                                {step === 3 && (
                                    <div>
                                        <p className="text-sm  text-gray-700">
                                            Enter your email Address
                                        </p>

                                        <StepThree />
                                    </div>
                                )}
                                {step === 4 && (
                                    <div>
                                        {" "}
                                        <p className="text-sm  text-gray-700">
                                            Enter your password
                                        </p>
                                        <StepFour />
                                    </div>
                                )}
                                {step === 5 && (
                                    <div>
                                        {" "}
                                        <p className="text-sm  text-gray-700">
                                            Confirm your password
                                        </p>
                                        <StepFive />
                                    </div>
                                )}
                                {step === 6 && <StepSix />}
                                <div>
                                    <div className="flex items-center text-gray-700">
                                        <div>
                                            <p className="text-sm">
                                                Already have an account?{" "}
                                                <Link
                                                    className="text-primary-600 hover:underline"
                                                    to="/login"
                                                >
                                                    Login
                                                </Link>{" "}

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <BasicFooter />
                </div>
            </section>
        </Seo>
    );
};

export default SignupPage;
