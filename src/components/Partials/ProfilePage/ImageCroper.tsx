import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import { useRef, useState } from "react";
import { BsCheck, BsX } from "react-icons/bs";


const ImageCroper = ({ src,handleCancel }: { src: string,handleCancel: () => void }) => {
    const cropperRef = useRef<ReactCropperElement>(null);
    const [dataUrl, setDataUrl] = useState<string | null>(null);
    const dataURLtoBlob = async (dataFile: string): Promise<Blob> => {
        try {
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
        } catch (error) {
            console.error("Error converting data URL to blob:", error);
            throw error;
        }
    };


    const handleSave = async () => {
        if (dataUrl) {
            const blob = await dataURLtoBlob(dataUrl);
            console.log(blob);
            setDataUrl(null);
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
            />

            <div className="flex justify-between mt-3 items-center">
                <button
                    onClick={handleCancel}
                    className="text-red-500 flex items-center p-4"
                >
                    <BsX className="w-8 h-8" /> cancel
                </button>

                <button onClick={handleSave} className="text-green-500 p-2 flex items-center">
                    <BsCheck className="w-8 h-8 mr-2" /> Save
                </button>
            </div>
        </>
    );
};

export default ImageCroper;
