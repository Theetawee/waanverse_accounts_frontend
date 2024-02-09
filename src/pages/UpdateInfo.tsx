import InfoFields from "../components/Partials/ProfilePage/InfoFields";
import useTopBar from "../hooks/useTopBar";

const UpdateInfo = () => {

    useTopBar("Update Info");

    return (
        <>
            <div className="p-4"
            >
                <div
                    className="relative px-4 bg-white rounded-md shadow pb-4 w-full"
                >   <div className="mx-auto max-w-2xl">
                        <div className="flex items-center justify-between p-6 dark:border-gray-600">
                            <h3 className="text-xl  text-gray-700 dark:text-white">
                                Update Info
                            </h3>
                            </div>
                        <div className="p-4">
                            <InfoFields/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateInfo;
