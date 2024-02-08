import { useEffect } from "react";
import { MdClose } from "react-icons/md";


const UpdateImage = () => {


    useEffect(() => {
        document.documentElement.style.overflow = "hidden"
        return () => { document.documentElement.style.overflow = "auto" }
    },[])


    return (
        <>
            <div
                id="default-modal"
                tabIndex={-1}
                aria-hidden="true"
                onClick={()=>history.back()}
                className={`
                    flex
                  overflow-hidden  fixed top-0 right-0 left-0 z-50 bg-black/30 justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full`}
            >
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="relative p-4 animate-fadeIn w-full max-w-xl  max-h-full"
                >
                    <div className="relative bg-white rounded-xl flex justify-center flex-col shadow dark:bg-gray-900">
                        <div className="flex items-center justify-between p-6 dark:border-gray-600">
                            <h3 className="text-xl  text-gray-700 dark:text-white">
                            Update Image
                            </h3>
                            <button
                                type="button"
                                onClick={()=>history.back()}
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="default-modal"
                            >
                                <MdClose className="w-8 h-8" />
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="p-4">
image

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateImage;
