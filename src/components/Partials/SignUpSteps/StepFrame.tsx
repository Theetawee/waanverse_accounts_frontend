import { ReactNode, RefObject, useContext } from "react";
import { StepContext } from "../../../context/StepContext";
import { MdOutlineArrowForwardIos } from "react-icons/md";
interface Props {
    childOne: ReactNode;
    next: boolean;
    nextStep?: number;
    refName?: RefObject<HTMLInputElement>;
}
import Loader from "../../common/Loader";
import { BiError } from "react-icons/bi";
import useHandleSignUpSteps from "../../../hooks/useHandleSignUpSteps";
/*
Total Steps = 10

-> First name
Label : First Name
Input : Text
id : first_name
name : first_name
required : true

-> Last name
Label : Last Name
Input : Text
id : last_name
name : last_name
required : true

-> Email
Label : Email
Input : Email
id : waanverse_email
name : waanverse_email
required : true

-> Phone number
Label : Phone Number
Input : Text
id : phone_nummber
name : phone_nummber
required : true

-> Gender
Label : Gender
Input : Text
id : gender
name : gender
required : true

-> Country
Label : Country
Input : Text
id : country
name : country
required : true

-> Dob
Label : Dob
Input : Date
id : dob
name : dob
required : true

-> Password
Label : Password
Input : Password
id : password
name : password
required : true

-> Confirm Password
Label : Confirm Password
Input : Password
id : confirm_password
name : confirm_password
required : true

-> Agreement
Label : Agreement
Input : Checkbox
id : agreement
name : agreement
required : true


*/






const StepFrame = ({ childOne, next, nextStep, refName }: Props) => {
    const { setStep } = useContext(StepContext);

    const {error,handleNext,handleSubmit,isLoading,signupErrors:errors } = useHandleSignUpSteps(refName,nextStep);


    return (
        <>
            <section className="flex items-center justify-center">
                <div className="grid grid-cols-1 w-full">
                    {errors && errors.length > 0 ? (
                        <>
                            <ul className="list-disc pl-4">
                            {errors.map((error, index) => (
                                <li key={index} className="text-red-500 mb-1">
                                    <span>{error.field}: </span>
                                    {error.message}
                                </li>
                            ))}
                                </ul>
                        </>
                    ) : (
                        <>
                            <div className="mt-1">{childOne}</div>
                            {error && (
                                <p className="text-sm flex-wrap flex text-red-400">
                                    <BiError className="w-4 h-4 mr-1" />
                                    {error}
                                </p>
                            )}
                        </>
                    )}
                </div>
            </section>
            <div className="flex items-center justify-end">
                {next ? (
                    <section className="h-20 flex items-center justify-end">
                        <div className="flex justify-end">
                            <button
                                onClick={handleNext}
                                type="button"
                                className="py-2 float-end flex items-center justify-center px-5 text-sm  text-gray-900 focus:outline-none bg-white rounded border border-gray-200 hover:bg-gray-50/70 hover:text-primary-700 focus:z-10 focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            >
                                <span>Next</span>
                                <MdOutlineArrowForwardIos className="ml-2 w-4 h-4" />
                            </button>
                        </div>
                    </section>
                ) : (
                    <section className="h-20 flex items-center justify-end">
                        {errors && errors.length > 0 ? (
                            <>
                                <button
                                    type="button"
                                    onClick={() => setStep(1)}
                                    className="focus:outline-none text-white bg-rose-600 hover:bg-rose-600/90 focus:ring-1 focus:ring-red-300 font-medium rounded text-sm px-5 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                >
                                    Retry again
                                </button>
                            </>
                        ) : (
                            <div className="flex justify-end">
                                <button
                                    onClick={handleSubmit}
                                    type="button"
                                    className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-0 focus:ring-primary-300 font-medium rounded text-sm px-5 py-2  dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                                >
                                    {isLoading ? <Loader fill="white"/> : "Submit"}
                                </button>
                            </div>
                        )}
                    </section>
                )}
            </div>
        </>
    );
};

export default StepFrame;
