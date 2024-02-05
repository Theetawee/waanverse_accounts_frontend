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

    const validate_data: (type: "email" | "username" | "password"|"phone"|"date", value: string) => boolean = (type, value) => {


        if (type === "email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            const isEmail = emailRegex.test(value);
            return isEmail;

        } if (type === "username") {
            //username must be lowercase with only leters or numbers
            const usernameRegex = /^[a-z0-9_-]{4,15}$/;
            const isValid = usernameRegex.test(value)
            if (isValid) {
                //check if its atleast 4 chars
                return value.length>=4
            }
            return false;
        }
        if (type === "phone") {
            const reg = /^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,19}$/
            const isValid = reg.test(value)
            return isValid;
        }
        if (type === "password") {
            const reg =
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
            const isValid = reg.test(value)
            return isValid;
        }
        if (type === "date") {
            const reg = /(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})/
            const isValid = reg.test(value)
            return isValid;
        }





        return true
    }

    return {
        encryptData,
        decryptData,
        validate_data,
    };
};

export default utils;
