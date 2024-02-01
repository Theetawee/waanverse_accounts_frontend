import { Link } from "react-router-dom";
import Bg from "../assets/images/bg.svg";
import Input from "../components/common/Input";
import { FaLock } from "react-icons/fa";
import { useState } from "react";
import CountrySelector from "../components/common/CountrySelector";
import useSignup from "../hooks/useSignup";
import Loader from "../components/common/Loader";

const SignupPage = () => {
    const [step, setStep] = useState(1);
    const totalSteps = 3;
    const { signup, isLoading, errors } = useSignup();


    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirm_password: "",
        country: "",
    });

    const getCountry = (value: { label: string; value: string }) => {
        setData({ ...data, country: value.label });
    };

    const getValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        signup(data);
    };

    const handleNext = () => {
        if (step < totalSteps) {
            setStep(step + 1);
        }
    };

    const handlePrev = () => {
        if (step > 1) {
            setStep(step - 1);
        }
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
                                disabled={isLoading}
                                setValue={true}
                                value={data.first_name}
                                onchange={getValue}
                            />
                        </div>
                        <div>
                            <Input
                                type="text"
                                name="last_name"
                                label="Last Name"
                                disabled={isLoading}
                                setValue={true}
                                value={data.last_name}
                                onchange={getValue}
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
                                disabled={isLoading}
                                setValue={true}
                                value={data.email}
                                onchange={getValue}
                            />
                        </div>
                        <div>
                            <CountrySelector sendValue={getCountry} />
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
                                disabled={isLoading}
                                setValue={true}
                                value={data.password}
                                onchange={getValue}
                            />
                        </div>
                        <div>
                            <Input
                                type="password"
                                name="confirm_password"
                                label="Confirm Password"
                                disabled={isLoading}
                                setValue={true}
                                value={data.confirm_password}
                                onchange={getValue}
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
            <div className="min-h-screen py-16 bg-gray-100/40 px-4 flex items-center justify-center">
                <div className="p-4 w-full mx-auto rounded-xl max-w-md shadow bg-white">
                    <form method="post" onSubmit={handleSubmit}>
                        <div className="grid space-y-6 grid-cols-1">
                            <div className="w-full flex items-center flex-col justify-center">
                                <span>
                                    <FaLock className="text-gray-600 w-8 h-8 mb-6 text-center flex items-center justify-center" />
                                </span>
                                <h1 className="text-3xl">
                                    Create your WaanVerse Account
                                </h1>
                            </div>
                            {errors && errors.length > 0 && (
                                <div className="text-red-500 bg-red-800/20 p-4 rounded-xl">
                                    <ul className="list-disc text-sm pl-4">
                                        {errors.map((error) => (
                                            <li
                                                key={
                                                    error.field + error.message
                                                }
                                            >
                                                <span className="font-bold">
                                                    {error.field}{" "}
                                                </span>
                                                <p>{error.message}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {renderInputsForStep(step)}
                            <div className="flex items-center gap-x-8">
                                {step !== 1 && (
                                    <div className="max-w-sm text-center mx-auto w-full">
                                        <button
                                            onClick={handlePrev}
                                            className="bg-white text-gray-800 border-gray-200 border font-bold py-2 px-4 rounded w-full"
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
                                            type="submit"
                                            disabled={isLoading}
                                            className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded w-full"
                                        >
                                            {isLoading ? <Loader fill="white"/> : "Submit"}
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
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SignupPage;
