import { Link } from "react-router-dom";
import { IoKeyOutline } from "react-icons/io5";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import Card from "../components/common/Card";
import { HiOutlineUser } from "react-icons/hi2";
const AccountPage = () => {

    const { userInfo} = useContext(AuthContext);

    return (
        <>
            <section className="px-4">
                <div className="max-w-screen-xl md:px-4 mx-auto">
                    <div className="flex py-8  md:py-16 px-4 items-center justify-between">
                        <div>
                            <p className="text-xl font-bold">Account</p>
                        </div>
                        <div className="hidden md:block">
                            <div className="flex hover:text-primary-600 items-center justify-center">
                                <div className="bg-primary-600 p-2 rounded-full">
                                    <IoKeyOutline className="w-5 text-white h-5" />
                                </div>
                                <Link
                                    to={"/"}
                                    className="flex ml-1 text-sm flex-col"
                                >
                                    <p>Change Password</p>
                                    <p>Security</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-md shadow">
                        <p className="text-lg mb-4">
                            Hello {userInfo?.name} welcome to your Waanverse
                            account control center
                        </p>
                        <p>Here is a quick guide to help you get started!!</p>
                    </div>
                    <div className="py-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <Card
                                name="Your Profile"
                                icon={HiOutlineUser}
                                path="/info"
                                description="Manage your personal information and preferences"
                            />
                            <Card
                                name="Security"
                                icon={IoKeyOutline}
                                path="/security"
                                description="Ensure the safety of your account with password management"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AccountPage;
