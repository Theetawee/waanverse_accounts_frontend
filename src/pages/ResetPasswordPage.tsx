import Loader from "../components/common/Loader";
import BasicFooter from "../components/common/BasicFooter";
import { useState } from "react";
import TextInput from "../components/common/Inputs/TextInput";

const ResetPasswordPage = () => {

    const [isLoading] = useState(false)

    return (
        <section className="min-h-screen bg-gray-50/40 px-4 py-16">
            <div>
                <div className="max-w-lg bg-white shadow mx-auto p-4 rounded">
                            <form method="post" >
                                <div className="mb-6">
                                    <h1 className="text-xl mb-2">
                                        Reset Password
                                    </h1>
                                    <p className="text-sm">
                                        Enter your email address and follow the
                                        instructions to reset your password.
                                    </p>
                                </div>
                                <div className="mb-6">
                                    <TextInput name="email" label="Email" type="email" required={true} disabled={false} id="email"/>
                                </div>
                                <div>
                                    <button
                                        disabled={false}
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

                </div>
            </div>
            <BasicFooter />
        </section>
    );
};

export default ResetPasswordPage;
