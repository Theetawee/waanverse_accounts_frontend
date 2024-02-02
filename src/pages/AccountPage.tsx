import DefaultAvater from "../assets/images/default.webp";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const AccountPage = () => {
    const { userData } = useContext(AuthContext);

    const name = `${userData?.first_name} ${userData?.last_name}`;

    return (
        <section className="min-h-screen py-8 px-4">
            <div className="w-full max-w-md mx-auto ">
                <div className="flex items-center justify-center">
                    <img
                        src={DefaultAvater}
                        alt={name}
                        className="w-24 h-24 rounded-full"
                    />
                </div>
            </div>
            <div className="py-2 text-gray-700">
                <h1 className="text-2xl text-center">
                    Hello {name}, Welcome to your account center
                </h1>
            </div>
        </section>
    );
};

export default AccountPage;
