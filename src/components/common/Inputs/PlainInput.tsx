import { RefObject } from "react";

interface Props {
    type: string;
    name: string;
    required?: boolean;
    label: string;
    placeholder: string;
    inref: RefObject<HTMLInputElement>;
    disabled: boolean;
    id: string;
    minLength?: number;
}

const PlainInput = ({
    type,
    name,
    id,
    required = true,
    label,
    placeholder,
    inref,
    disabled,
    minLength,
}: Props) => {
    const className =
        "bg-gray-50/20 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500";

    return (
        <>
            <div>
                <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    First name
                </label>
                <input
                    type={type}
                    ref={inref}
                    name={name}
                    id={id}
                    disabled={disabled}
                    required={required}
                    className={className}
                    autoCapitalize="off"
                    autoComplete="off"
                    minLength={minLength}
                    aria-label={label}
                    placeholder={placeholder}
                />
            </div>
        </>
    );
};

export default PlainInput;
