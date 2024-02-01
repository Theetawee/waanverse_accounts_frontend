import { useState } from "react";
import Input from "../components/common/Input";
import Loader from "../components/common/Loader";
import useHandleResetPassword from "../hooks/useHandleResetPassword";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ResetPasswordPage = () => {
    const navigate = useNavigate();
    const { getSecurityQuestions, isLoading, verifyAnswers, changePassword } =
        useHandleResetPassword();
    const [question1, setQuestion1] = useState("");
    const [question2, setQuestion2] = useState("");
    const [token, setToken] = useState("");
    const [uid, setUid] = useState("");

    const [gotEmail, setGotEmail] = useState("");
    const [step, setStep] = useState(1);

    const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const email = e.currentTarget.email.value;
        setGotEmail(email);

        const qns = await getSecurityQuestions(email);


        if (
            qns.question1 !== "" &&
            qns.question1 !== null &&
            qns.question2 !== "" &&
            qns.question2 !== null
        ) {
            setStep(2);
            setQuestion1(qns.question1);
            setQuestion2(qns.question2);
        }
    };

    const handleAnswerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const answer1 = e.currentTarget.answer1.value;
        const answer2 = e.currentTarget.answer2.value;
        const resp = await verifyAnswers(gotEmail, answer1, answer2);

        if (resp.data === "correct") {
            setToken(resp.token);
            setUid(resp.uid);
            setStep(3);
        }
    };

    const handlePasswordSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
        const new_password1 = e.currentTarget.new_password1.value;
        const new_password2 = e.currentTarget.new_password2.value;

        const resp = await changePassword(
            new_password1,
            new_password2,
            token,
            uid
        );
        if (resp.message === "success") {
            toast.success("Password changed successfully");
            return navigate("/login");
        } else {
            toast.error("Unable to change password, please try again");
        }
    };

    return (
        <section className="min-h-screen bg-gray-50 px-4 py-16">
            <div>
                <div className="max-w-lg bg-white shadow mx-auto p-4 rounded-xl">
                    {step === 1 && (
                        <>
                            <form method="post" onSubmit={handleEmailSubmit}>
                                <div className="mb-6">
                                    <h1 className="text-3xl mb-2">
                                        Reset Password
                                    </h1>
                                    <p>
                                        Enter your email address and follow the
                                        instructions to reset your password.
                                    </p>
                                </div>
                                <div className="mb-6">
                                    <Input
                                        type="email"
                                        name="email"
                                        label="Email"
                                        disabled={isLoading}
                                    />
                                </div>
                                <div>
                                    <button
                                        disabled={isLoading}
                                        className=" bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        {isLoading ? <Loader fill="white" /> : "Continue"}
                                    </button>
                                </div>
                            </form>
                        </>
                    )}
                    {step === 2 &&
                        question1 !== "" &&
                        question1 !== null &&
                        question2 !== "" &&
                        question2 !== null && (
                            <>
                                <form
                                    method="post"
                                    onSubmit={handleAnswerSubmit}
                                >
                                    <div className="mb-6">
                                        <h2 className="text-3xl mb-2">
                                            Answer the following security
                                            questions and proceed to reset your
                                            password
                                        </h2>
                                    </div>
                                    <div className="mb-6">
                                        <p className="text-gray-700">
                                            {" "}
                                            {question1}
                                        </p>
                                        <Input
                                            type="text"
                                            name="answer1"
                                            label="Answer"
                                            disabled={isLoading}
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <p className="text-gray-700">
                                            {" "}
                                            {question2}
                                        </p>
                                        <Input
                                            type="text"
                                            name="answer2"
                                            label="Answer"
                                            disabled={isLoading}
                                        />
                                    </div>
                                    <div>
                                        <button
                                            disabled={isLoading}
                                            className=" bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded"
                                        >
                                            {isLoading ? (
                                                <Loader fill="white" />
                                            ) : (
                                                "Continue"
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </>
                        )}

                    {step === 3 && (
                        <>
                            <form method="post" onSubmit={handlePasswordSubmit}>
                                <div className="mb-6">
                                    <h1 className="text-3xl mb-2">
                                        Reset Password
                                    </h1>
                                    <p>Enter your new password.</p>
                                </div>
                                <div className="mb-6">
                                    <Input
                                        type="password"
                                        name="new_password1"
                                        label="Password"
                                        disabled={isLoading}
                                    />
                                </div>
                                <div className="mb-6">
                                    <Input
                                        type="password"
                                        name="new_password2"
                                        label="Confirm Password"
                                        disabled={isLoading}
                                    />
                                </div>

                                <div>
                                    <button
                                        disabled={isLoading}
                                        className=" bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        {isLoading ? (
                                            <Loader fill="white" />
                                        ) : (
                                            "Save"
                                        )}
                                    </button>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ResetPasswordPage;
