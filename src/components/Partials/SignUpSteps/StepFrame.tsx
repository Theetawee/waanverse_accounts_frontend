import { ReactNode, RefObject, useContext } from "react";
import { StepContext } from "../../../context/StepContext";
import toast from "react-hot-toast";
import { MdOutlineArrowForwardIos } from "react-icons/md";
interface Props {
    childOne: ReactNode;
    next: boolean;
    nextStep?: number;
    refName?: RefObject<HTMLInputElement>;
}


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
    const { setStep, setData, data } = useContext(StepContext);

    const handleSubmit = () => {
        console.log(data);
    };

    const handleNext = () => {
        if (refName?.current) {
            if(refName.current.value!==""){
                setData((prev) => ({ ...prev, [refName.current!.name]: refName.current!.value }));
                setStep(nextStep!);
            }
            else{
                toast.error(`Please enter ${refName.current.ariaLabel}`);
                refName.current.className+=" border-red-500 border-2";
                return;
            }
        }
    };

    return (
        <>
            <section className="h-32 flex items-center justify-center">
                <div className="grid grid-cols-1 gap-4 w-full">
                    <div>{childOne}</div>
                </div>
            </section>
            <div className="flex items-center justify-end">
                {next ? (
                    <section className="h-20 flex items-center justify-end">
                        <div className="flex justify-end">
                            <button
                                onClick={handleNext}
                                type="button"
                                className="py-2.5 float-end flex items-center justify-center px-5 w-32 font-medium text-gray-900 focus:outline-none bg-white rounded border border-gray-200 hover:bg-gray-50 hover:text-primary-700 focus:z-10 focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            >
                                <span>Next</span>
                                <MdOutlineArrowForwardIos className="ml-2 w-4 h-4" />
                            </button>
                        </div>
                    </section>
                ) : (
                    <section className="h-20 flex items-center justify-end">
                        <div className="flex justify-end">
                            <button
                                onClick={handleSubmit}
                                type="button"
                                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded text-sm px-5 py-2.5  dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                            >
                                Submit
                            </button>
                        </div>
                    </section>
                )}
            </div>
        </>
    );
};

export default StepFrame;
