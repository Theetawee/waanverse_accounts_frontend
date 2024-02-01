import CryptoJS from "crypto-js";
import { User } from "./useTypes";




const SECRET_KEY=import.meta.env.VITE_SECRET_KEY;
const utils = () => {
    const encryptData = (data: User): string => {
        const encryptedData = CryptoJS.AES.encrypt(
            JSON.stringify(data),
            SECRET_KEY
        ).toString();
        return encryptedData;
    };

    const decryptData = (encryptedData: string): User => {
        const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
        const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        return decryptedData;
    };

    return {
        encryptData,
        decryptData,
    }
};

export default utils;
