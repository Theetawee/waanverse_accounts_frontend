import { useQuery } from "@tanstack/react-query";
import Endpoints from "../hooks/Endpoints";
import Loader from "../components/common/Loader";
import CommonError from "../components/common/CommonError";
import useTopBar from "../hooks/useTopBar";
import DetailBlock from "../components/Partials/ProfilePage/DetailBlock";
import HeaderInfo from "../components/Partials/ProfilePage/HeaderInfo";
import { Link } from "react-router-dom";



const ProfilePage = () => {



    useTopBar("Profile");
    const { getUserInfo } = Endpoints();
    const { data, isPending, isError } = useQuery({
        queryKey: ["user-info"],
        queryFn: getUserInfo,
    });

    if (isPending) {
        return <Loader />;
    } else if (isError) {
        return <CommonError />;
    } else {
        return (
            <section className="min-h-screen px-4 pb-16">
                <div className="grid grid-cols-1 gap-3">
                    <HeaderInfo data={data} />
                    <div className="bg-white  rounded-md shadow">
                        <div className="flex items-center p-4 justify-between gap-4">
                            <div>
                                Profile info
                                <p className="text-xs">
                                    This data is not visible to anyone else
                                </p>
                            </div>
                            <Link
                                to="/account/update/info"
                                className="text-sm text-primary-600 hover:underline"
                            >
                                Edit info
                            </Link>
                        </div>
                        <hr />
                        <div>
                            <DetailBlock
                                label="Username"
                                value={`@${data.username}`}
                            />
                            <DetailBlock label="Email" value={data.email} />
                            <DetailBlock label="Phone" value={data.phone} />
                            <DetailBlock
                                label="Country"
                                value={data.location}
                            />
                            <DetailBlock label="Gender" value={data.gender} />
                            <DetailBlock
                                label="Date of Birth"
                                value={data.date_of_birth}
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};

export default ProfilePage;
