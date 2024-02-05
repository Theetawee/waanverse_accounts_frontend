import Loader from "../components/common/Loader";
import BasicFooter from "../components/common/BasicFooter";
import { FormEvent, useState } from "react";
import TextInput from "../components/common/Inputs/TextInput";
import Endpoints from "../hooks/Endpoints";
import toast from "react-hot-toast";
import { useParams,useNavigate } from "react-router-dom";


const PasswordResetConfirmPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { uid, token } = useParams();
    const navigate = useNavigate();
    const { handlePasswordResetConfirm } = Endpoints();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        setIsLoading(true);
        e.preventDefault();
        const new_password1 = e.currentTarget.new_password1.value;
        const new_password2 = e.currentTarget.new_password2.value;
        if (new_password1 !== new_password2) {
            toast.error('Passwords dont match')
            setIsLoading(false);
            return
        }
        if (uid !== undefined && token !== undefined) {
            const data = {
                new_password1: new_password1,
                new_password2: new_password2,
                uid: uid,
                token: token
            }

            try {
                await handlePasswordResetConfirm(data);
                toast.success("Password has been reset successfully")
                navigate('/login')
            } catch (error) {
                toast.error(
                    "Couldn't send email to reset your password. make sure the email you entered is valid"
                );
            } finally {
                setIsLoading(false);
            }
        } else {
            setIsLoading(false)
            toast.error('Something went wrong please try again')
            navigate('/login');
        }
    };

    return (
        <section className="min-h-screen bg-gray-50/40 px-4 py-16">
            <div>
                <div className="max-w-lg bg-white shadow mx-auto p-4 rounded">
                        <form method="post" onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <h1 className="text-xl mb-2">Reset Password</h1>
                                <p className="text-sm">Add your new password</p>
                            </div>
                            <div className="mb-6 grid gap-6 grid-cols-1">
                                <TextInput
                                    name="new_password1"
                                    label="New password"
                                    type="password"
                                    required={true}
                                    disabled={false}
                                    id="new_password1"
                                />
                                <TextInput
                                    name="new_password2"
                                    label="Confirm New password"
                                    type="password"
                                    required={true}
                                    disabled={false}
                                    id="new_password2"
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

                </div>
            </div>
            <BasicFooter />
        </section>
    );
};

export default PasswordResetConfirmPage;
