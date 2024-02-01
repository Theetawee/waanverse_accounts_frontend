import React, { useState } from "react";

import { FaEyeSlash, FaEye } from "react-icons/fa6";

interface Props {
    type: string;
    name: string;
    required?: boolean;
    label: string;
    setValue?: boolean;
    value?: string;
    disabled: boolean;
    minLength?: number;
    onchange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({
    type,
    name,
    required = true,
    label,
    setValue = false,
    value,
    onchange,
    minLength = 0,
    disabled,
}: Props): JSX.Element => {
    const [passwordType, setPasswordType] = useState("password");

    return (
        <div className="relative w-full mb-3">
            {setValue ? (
                <input
                    type={type === "password" ? passwordType : type}
                    id={name}
                    name={name}
                    disabled={disabled}
                    required={required}
                    autoCapitalize="off"
                    autoComplete="off"
                    minLength={minLength}
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer"
                    placeholder=" "
                    onChange={onchange}
                    value={value}
                />
            ) : (
                <input
                    type={type === "password" ? passwordType : type}
                    id={name}
                    name={name}
                    disabled={disabled}
                    required={required}
                    autoCapitalize="off"
                    autoComplete="off"
                    minLength={minLength}
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer"
                    placeholder=" "
                />
            )}
            {type === "password" && (
                <div className="absolute  top-3.5 right-4">
                    {passwordType === "text" ? (
                        <span
                            onClick={() => setPasswordType("password")}
                            className="cursor-pointer"
                        >
                            <FaEyeSlash className="w-5 text-gray-600 h-5" />
                        </span>
                    ) : (
                        <span
                            onClick={() => setPasswordType("text")}
                            className="cursor-pointer"
                        >
                            <FaEye className="w-5 h-5 text-gray-600" />
                        </span>
                    )}
                </div>
            )}
            <label
                htmlFor={name}
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-primary-600 peer-focus:dark:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
                {label}
            </label>
        </div>
    );
};

export default Input;
