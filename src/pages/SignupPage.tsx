import { Link } from "react-router-dom";
import Bg from "../assets/images/bg.svg";
import Input from "../components/common/Input";
import { FaLock } from "react-icons/fa";
import { useState } from "react";
import CountrySelector from "../components/common/CountrySelector";

const SignupPage = () => {
    const [step, setStep] = useState(1);
    const totalSteps = 3;
    const [submit, setSubmit] = useState(false);

    const handleNext = () => {
        if (step < totalSteps) {
            setStep(step + 1);
        } else {
            setSubmit(true);
        }
    };

    const handlePrev = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const handleReset = () => {
        setStep(1);
        setSubmit(false);
    };

    const renderInputsForStep = (step: number) => {
        switch (step) {
            case 1:
                return (
                    <>
                        <div>
                            <Input
                                type="text"
                                name="first_name"
                                label="First Name"
                                disabled={false}
                            />
                        </div>
                        <div>
                            <Input
                                type="text"
                                name="last_name"
                                label="Last Name"
                                disabled={false}
                            />
                        </div>
                    </>
                );
            case 2:
                return (
                    <>
                        <div>
                            <Input
                                type="email"
                                name="email"
                                label="Email"
                                disabled={false}
                            />
                        </div>
                        <div>
                            <CountrySelector/>

                        </div>
                    </>
                );
            case 3:
                return (
                    <>
                        <div>
                            <Input
                                type="password"
                                name="password"
                                label="Password"
                                disabled={false}
                            />
                        </div>
                        <div>
                            <Input
                                type="password"
                                name="confirm_password"
                                label="Confirm Password"
                                disabled={false}
                            />
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <section
            className="h-full overflow-x-hidden"
            style={{ backgroundImage: `url(${Bg})` }}
        >
            <div className="h-screen bg-gray-100/40 px-4 flex items-center justify-center">
                <div className="p-4 w-full mx-auto rounded-xl max-w-md shadow bg-white">
                    <div className="grid space-y-6 grid-cols-1">
                        <div className="w-full flex items-center flex-col justify-center">
                            <span>
                                <FaLock className="text-gray-600 w-8 h-8 mb-6 text-center flex items-center justify-center" />
                            </span>
                            <h1 className="text-3xl">
                                Create your WaanVerse Account
                            </h1>
                        </div>
                        {renderInputsForStep(step)}
                        <div className="flex items-center gap-x-8">
                            {step !== 1 && (
                                <div className="max-w-sm text-center mx-auto w-full">
                                    <button
                                        onClick={handlePrev}
                                        className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded w-full"
                                    >
                                        Back
                                    </button>
                                </div>
                            )}
                            {step !== totalSteps ? (
                                <div className="max-w-sm text-center mx-auto w-full">
                                    <button
                                        onClick={handleNext}
                                        className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded w-full"
                                    >
                                        Next
                                    </button>
                                </div>
                            ) : (
                                <div className="max-w-sm text-center mx-auto w-full">
                                    <button
                                        onClick={handleReset}
                                        className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded w-full"
                                    >
                                        Reset
                                    </button>
                                </div>
                            )}
                            {submit && (
                                <div className="max-w-sm text-center mx-auto w-full">
                                    <button className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded w-full">
                                        Login
                                    </button>
                                </div>
                            )}
                        </div>
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
                </div>
            </div>
        </section>
    );
};

export default SignupPage;
