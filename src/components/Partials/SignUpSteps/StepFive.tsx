import { useRef, useState } from "react";
import StepFrame from "./StepFrame";
import { FaAngleDown } from "react-icons/fa6";
// Step five handles the gender
const StepFive = () => {
    const genderRef = useRef<HTMLInputElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");

    const genderOptions = [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "other", label: "Other" },
    ];

    const toggleOptions = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = (value: string) => {
        setSelectedOption(value);
        setIsOpen(false);
    };

    const genderInput = (
        <div className="relative mt-4">
            <input type="hidden" aria-label="Gender" id="waanverse_user_gender" ref={genderRef} name="gender" value={selectedOption} />
            <label
                htmlFor="waanverse_user_gender"
                className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
                What's your gender
            </label>
            <div
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md relative cursor-pointer"
                onClick={toggleOptions}
            >
                <div className="flex justify-between items-center">
                    <span>
                        {selectedOption === ""
                            ? "Select Gender"
                            : selectedOption.toUpperCase()}
                    </span>
                    <FaAngleDown className={`${isOpen ? "rotate-180" : ""} w-5 h-5`} />

                </div>
                {isOpen && (
                    <div className="absolute z-10 top-full left-0 mt-2 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-md">
                        {genderOptions.map((option) => (
                            <div
                                key={option.value}
                                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                                onClick={() => handleOptionSelect(option.value)}
                            >
                                {option.label}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <>
            <StepFrame
                childOne={genderInput}
                next={true}
                nextStep={6}
                refName={genderRef}
            />
            {/* Access the selected value using genderRef.current.value */}
        </>
    );
};

export default StepFive;
