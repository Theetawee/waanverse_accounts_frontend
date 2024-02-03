import CryptoJS from "crypto-js";
import { UserType } from "./types";




const SECRET_KEY=import.meta.env.VITE_SECRET_KEY;
const utils = () => {
    const encryptData = (data: UserType): string => {
        const encryptedData = CryptoJS.AES.encrypt(
            JSON.stringify(data),
            SECRET_KEY
        ).toString();
        return encryptedData;
    };

    const decryptData = (encryptedData: string): UserType => {
        const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
        const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        return decryptedData;
    };

    const generateWaanverseEmail = (input: string): string | null => {
        // Remove unwanted characters and replace spaces with underscores
        const sanitizedInput = input
            .replace(/[^\w\s@.-]/g, "")
            .replace(/\s/g, "_");

        // Validate if the string looks like an email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailRegex.test(sanitizedInput)) {
            // If it's a valid email, append "@waanverse.com" and return
            return sanitizedInput.includes("@")
                ? sanitizedInput.split("@")[0] + "@waanverse.com"
                : sanitizedInput + "@waanverse.com";
        } else {
            const newEmail = sanitizedInput + "@waanverse.com";
            return newEmail;
        }
    };


    return {
        encryptData,
        decryptData,
        generateWaanverseEmail
    }
};

export default utils;
