import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import { useContext, useRef, useState } from "react";
import { BsCheck, BsX } from "react-icons/bs";
import { useMutation } from "@tanstack/react-query";
import Endpoints from "../../../hooks/Endpoints";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Loader from "../../common/Loader";
import { AuthContext } from "../../../context/AuthContext";


const ImageCroper = ({ src,handleCancel }: { src: string,handleCancel: () => void }) => {
    const cropperRef = useRef<ReactCropperElement>(null);
    const { setFastRefresh} = useContext(AuthContext);
    const { updateProfileImage} = Endpoints();
    const [dataUrl, setDataUrl] = useState<string | null>(null);
    const navigate = useNavigate();

    const dataURLtoBlob = async (dataFile: string): Promise<Blob> => {

            const binary = atob(dataFile.split(",")[1]);
            const array: number[] = [];
            let i = 0;
            const len = binary.length;
            while (i < len) {
                array.push(binary.charCodeAt(i));
                i++;
            }
            const blob = new Blob([new Uint8Array(array)], {
                type: "image/webp",
            });

            return blob;

    };


    const { isPending,mutateAsync} = useMutation({
        mutationFn: (blob: Blob) => updateProfileImage(blob),
        onSuccess: () => {
            handleCancel();
            navigate("/account/info")
            toast.success("Profile image updated successfully")
            setFastRefresh(true);
        },
        onError: () => {
            toast.error("Something went wrong")
        }
    })


    const handleSave = async () => {
        if (dataUrl) {
            const blob = await dataURLtoBlob(dataUrl);
            mutateAsync(blob);
        }
    };






    const onCrop = () => {
        const cropper = cropperRef.current?.cropper;
        if (!cropper) return;
        const dataUrl = cropper.getCroppedCanvas().toDataURL();
        setDataUrl(dataUrl);
    };

    return (
        <>
            {isPending ? (<div className="flex flex-col items-center"><Loader />

                <p className="text-sm text-gray-500">Updating profile image</p>

            </div>) : (
                <Cropper
                    src={src}
                    style={{ height: 300, width: "100%" }}
                    initialAspectRatio={1}
                    guides={true}
                    crop={onCrop}
                    aspectRatio={1}
                    cropBoxResizable={false}
                    minContainerHeight={150}
                    minContainerWidth={150}
                    minCropBoxWidth={150}
                    minCropBoxHeight={150}
                    className="w-full"
                    ref={cropperRef}
                />)}
            {isPending ?(<></>):(<><div className="flex justify-between mt-3 items-center">
                <button
                    onClick={handleCancel}
                    className="text-red-500 flex items-center p-4"
                >
                    <BsX className="w-8 h-8" /> cancel
                </button>

                <button onClick={handleSave} className="text-green-500 p-2 flex items-center">
                    <BsCheck className="w-8 h-8 mr-2" /> Save
                </button>
            </div></>)}

        </>
    );
};

export default ImageCroper;
