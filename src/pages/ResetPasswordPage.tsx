import Loader from "../components/common/Loader";
import BasicFooter from "../components/common/BasicFooter";
import { FormEvent, useContext, useState } from "react";
import TextInput from "../components/common/Inputs/TextInput";
import Endpoints from "../hooks/Endpoints";
import { StepContext } from "../context/StepContext";
import toast from "react-hot-toast";
import Seo from "../components/utils/Seo";
const ResetPasswordPage = () => {

    const [isLoading,setIsLoading] = useState(false)
    const { setStep,step} = useContext(StepContext);

    const { handlePasswordReset} = Endpoints();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        setIsLoading(true);
        e.preventDefault();
        const emailVal= e.currentTarget.email.value;
        try {
            await handlePasswordReset(emailVal);
            setStep(2)
        } catch (error) {
            toast.error("Couldn't send email to reset your password. make sure the email you entered is valid");
        } finally {
            setIsLoading(false);
        }
    }



    return (
        <Seo
            title="Account Recovery: Reset Your Password"
            description="Forgot your password? No worries! Follow the steps below to reset your account password securely. Enter your email address, and we'll guide you through the process to regain access to your account. Your online security is our priority, and we're here to help you get back to your account hassle-free."
        >
            <section className="min-h-screen bg-gray-50/40 px-4 py-16">
                <div>
                    <div className="max-w-lg bg-white shadow mx-auto p-4 rounded">
                        {step === 1 && (
                            <form method="post" onSubmit={handleSubmit}>
                                <div className="mb-6">
                                    <h1 className="text-xl mb-2">
                                        Reset Password
                                    </h1>
                                    <p className="text-sm">
                                        Make sure you enter a verified correct
                                        email address associated with your
                                        account
                                    </p>
                                </div>
                                <div className="mb-6">
                                    <TextInput
                                        name="email"
                                        label="Email"
                                        type="email"
                                        required={true}
                                        disabled={false}
                                        id="email"
                                    />
                                </div>
                                <div>
                                    <button
                                        disabled={isLoading}
                                        type="submit"
                                        className=" bg-primary-600 text-sm hover:bg-primary-600/90 text-white font-bold py-2 px-5 rounded"
                                    >
                                        {isLoading ? (
                                            <Loader fill="white" />
                                        ) : (
                                            "Continue"
                                        )}
                                    </button>
                                </div>
                            </form>
                        )}

                        {step === 2 && (
                            <>
                                <div>
                                    <p>
                                        We have sent an email to your email
                                        address. Please check your email and
                                        click on the link to reset your
                                        password.
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <BasicFooter />
            </section>
        </Seo>
    );
};

export default ResetPasswordPage;
