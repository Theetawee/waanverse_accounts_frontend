import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import { MdClose } from "react-icons/md";
import { AuthContext } from "../context/AuthContext";
import DefaultAvater from "../assets/images/default.webp";
import { BsImage} from "react-icons/bs";
import ImageCroper from "../components/Partials/ProfilePage/ImageCroper";

const UpdateImage = () => {
    const { userInfo } = useContext(AuthContext);
    const inputRef = useRef<HTMLInputElement>(null);
    const [error, setError] = useState<string | null>(null);
    const minWidth = 150;
    useEffect(() => {
        document.documentElement.style.overflow = "hidden"
        return () => { document.documentElement.style.overflow = "auto" }
    }, [])

    const [src, setSrc] = useState<string|null>();


const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.addEventListener("load", () => {
        const imgElement = new Image();

        const imgUrl = fileReader.result?.toString() || "";
        imgElement.src = imgUrl;

        imgElement.addEventListener("load", (e) => {
            const { naturalHeight, naturalWidth } =
                e.currentTarget as HTMLImageElement;
            if (naturalHeight < minWidth || naturalWidth < minWidth) {
                setError("Image must be at least 150x150 pixels.");
                setSrc(null);
                return;
            } else {
                setError(null);
                setSrc(imgUrl);
            }
        });
    });

    fileReader.readAsDataURL(file);
};


    const handleCancel = () => {
        setSrc(null);
        if(inputRef.current){
            inputRef.current.value = "";
        }
}




    return (
        <>
            <div
                id="default-modal"
                tabIndex={-1}
                aria-hidden="true"
                onClick={() => history.back()}
                className={`
                    flex
                  overflow-hidden  fixed top-0 right-0 left-0 z-50 bg-black/30 justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full`}
            >
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="relative p-4 animate-fadeIn w-full max-w-xl  max-h-full"
                >
                    <div className="relative bg-white rounded-md flex justify-center flex-col shadow dark:bg-gray-900">
                        <div className="flex items-center justify-between p-6 dark:border-gray-600">
                            <h3 className="text-xl  text-gray-700 dark:text-white">
                                Update Image
                            </h3>
                            <button
                                type="button"
                                onClick={() => history.back()}
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-md text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="default-modal"
                            >
                                <MdClose className="w-8 h-8" />
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="p-4">
                            <div className={`relative ${src ? "hidden" : "flex"}  items-center justify-center`}>
                                <img src={userInfo?.image || DefaultAvater} alt="User" className="w-52 h-52 border border-gray-100 rounded-full object-cover" />
                                <span>
                                    <input ref={inputRef} onChange={handleOnchange} type="file" className="absolute z-10 top-0 left-0 w-full h-full opacity-0  cursor-pointer" />
                                </span>
                                <span className="absolute bg-gray-400/20 flex items-center justify-center top-0 p-2 left-0 w-full h-full"><BsImage className="w-6 h-6 text-white" /></span>
                            </div>
                            {error && (
                                <div className="text-red-500 text-center">
                                    <p>{error}</p>
                                </div>
                            )}
                            {src && !error && <ImageCroper src={src} handleCancel={handleCancel} />}

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default UpdateImage;
