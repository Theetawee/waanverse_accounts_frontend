import { useQuery } from "@tanstack/react-query";
import Endpoints from "../hooks/Endpoints";
import Loader from "../components/common/Loader";
import CommonError from "../components/common/CommonError";
import useTopBar from "../hooks/useTopBar";
import Image from "../components/common/Image";
import DefaultAvater from "../assets/images/default.webp";
import DetailBlock from "../components/common/DetailBlock";

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
                    <div className="bg-white shadow rounded-md">
                        <div className="flex p-4 flex-wrap gap-y-3 items-center">
                            <div>
                                <Image
                                    src={data.image || DefaultAvater}
                                    alt={data.name}
                                    hash={data.image_hash}
                                    className="w-32 h-32 border border-gray-100 rounded-full object-cover"
                                />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm mb-6 max-w-sm">
                                    Personalize your account with a photo. Your
                                    profile photo will appear on apps and
                                    devices that use your Microsoft account.
                                </p>
                                <div>
                                    <button className="px-5 py-1.5 border border-gray-200 rounded">
                                        Change photo
                                    </button>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="p-4 grid grid-cols-3">
                            <div>
                                <p>Full name</p>
                            </div>
                            <div>
                                <p>{data.name}</p>
                            </div>
                            <div className="flex items-center justify-end">
                                <button>Edit name</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white  rounded-md shadow">
                        <div className="flex items-center p-4 justify-between gap-4">
                            <div>
                                Profile info
                                <p className="text-xs">
                                    This data is not visible to anyone else
                                </p>
                            </div>
                            <span>Edit info</span>
                        </div>
                        <hr />
                        <div>
                            <DetailBlock
                                label="username"
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
