import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import DefaultAvater from "../assets/images/default.webp";
import { Link} from "react-router-dom";
import AsideLink from "./AsideLink";
import { HiOutlineHome,HiOutlineUser } from "react-icons/hi2";
import { BsShield } from "react-icons/bs";
// import { AiTwotoneAppstore } from "react-icons/ai";
// import { IoIosLink } from "react-icons/io";
import { HiOutlineLogout } from "react-icons/hi";
import Image from "../components/common/Image";


const Aside = () => {
    const { userInfo } = useContext(AuthContext);

    const name = `${userInfo?.name}`;

    const profile_image = userInfo?.image || DefaultAvater;

    return (
        <>
            <div className="flex items-center">
                <div className="w-12 h-12 rounded-full ">
                    <Image src={profile_image} alt={name} hash={userInfo?.profile_image_hash} className="w-full rounded-full h-full"/>
                </div>
                <div className="ml-2">
                    <Link to={"/account/info"}>
                        <p className="hover:text-primary-500">{name}</p>
                        <p className="text-sm hover:text-primary-500 text-gray-600">
                            {userInfo?.email}
                        </p>
                    </Link>
                </div>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-2">
                <AsideLink
                    label="Account"
                    path="/account/home"
                    icon={HiOutlineHome}
                />
                <AsideLink
                    label="Your Info"
                    path="/account/info"
                    icon={HiOutlineUser}
                />
                <AsideLink label="Security" path="/account/security" icon={BsShield} />
                {/* <AsideLink
                    label="Privacy"
                    path="/privacy"
                    icon={HiOutlineLockClosed}
                /> */}
                {/* <AsideLink
                    label="Products and Services"
                    path="/apps"
                    icon={AiTwotoneAppstore}
                />
                <AsideLink
                    label="Linked Apps"
                    path="/linked"
                    icon={IoIosLink}
          /> */}
          <AsideLink label="Logout" path="/logout" icon={HiOutlineLogout} />

            </div>
        </>
    );
};

export default Aside;
