import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import BasicFooter from "../components/common/BasicFooter";
import { useContext } from "react";
import { StepContext } from "../context/StepContext";
import { StepOne, StepTwo, StepThree, StepFour, StepFive, StepSix, StepSeven, StepEight, StepNine, StepTen } from "../components/Partials/SignUpSteps";

const SignupPage = () => {

    const { step } = useContext(StepContext);


    return (
        <section className="h-full overflow-x-hidden">
            <div className="min-h-screen flex-col py-16 bg-gray-100/40 px-4 flex items-center justify-center">
                <div className="sm:p-8 p-4 w-full mx-auto rounded-xl max-w-lg shadow bg-white">
                    <form method="post">
                        <div className="grid space-y-6 grid-cols-1">
                            <div className="w-full flex items-center flex-col justify-center">
                                <span>
                                    <FaLock className="text-gray-600 w-8 h-8 mb-6 text-center flex items-center justify-center" />
                                </span>
                                <h1 className="text-3xl">
                                    Create your WaanVerse Account
                                </h1>
                                <div className="max-w-32 text-center rounded border w-full border-gray-100 p-2">
                                    <p className="font-medium text-lg">Step {step} of 10</p>
                                </div>
                            </div>
                            {step===1 && (
                            <div>
                                <StepOne />
                            </div>
                            )}
                            {step===2 && (
                            <div>
                                <StepTwo />
                            </div>
                            )}
                            {step === 3 && (
                                <div>
                                    <StepThree/>
                                </div>
                            )}
                            {step === 4 && (
                                <StepFour/>
                            )}
                            {step === 5 && (
                                <StepFive/>
                            )}
                            {step === 6 && (
                                <StepSix/>
                            )}
                            {step === 7 && (
                                <StepSeven/>
                            )}
                            {step === 8 && (
                                <StepEight/>
                            )}
                            {step === 9 && (
                                <StepNine/>
                            )}
                            {step === 10 && (
                                <StepTen/>
                            )}
                            <div>
                                <div className="flex items-center">
                                    <div>
                                        <p>
                                            You can{" "}
                                            <Link
                                                className="text-primary-600 hover:underline"
                                                to="/login"
                                            >
                                                Login
                                            </Link>{" "}
                                            to an existing account
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
    );
};

export default SignupPage;
