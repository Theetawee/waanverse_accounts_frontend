import DefaultAvatar from "../assets/images/default.webp";
import Card from "../components/common/Card";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { FaPencilAlt, FaLink, FaShieldAlt, FaLock } from "react-icons/fa";

const AccountPage = () => {
    const { userInfo } = useContext(AuthContext);

    const name = `${userInfo?.first_name} ${userInfo?.last_name}`;

    return (
        <>
            <section className="pt-16 px-4">
                <div className="w-full max-w-md mx-auto">
                    <div className="flex items-center mb-4 justify-center">
                        <img
                            src={DefaultAvatar}
                            alt={name}
                            className="w-32 h-32 rounded-full"
                        />
                    </div>
                </div>
                <div className="py-2 text-gray-700">
                    <h1 className="text-2xl text-center">
                        Hello {name}, Welcome to your account center
                    </h1>
                </div>
            </section>
            <section className="max-w-screen-md p-8 sm:p-4 mx-auto">
                <div className="flex items-center justify-between flex-wrap">
                    <Card
                    name="Edit Your Information"
                    description="Update your personal details"
                    icon={FaPencilAlt}
                />
                <Card
                    name="Linked Apps"
                    description="View and manage connected applications"
                    icon={FaLink}
                />
                <Card
                    name="Privacy Settings"
                    description="Control your account privacy preferences"
                    icon={FaShieldAlt}
                />
                <Card
                    name="Recovery & Security"
                    description="Manage account recovery and security options"
                    icon={FaLock}
                    />
                    </div>
            </section>
        </>
    );
};

export default AccountPage;
