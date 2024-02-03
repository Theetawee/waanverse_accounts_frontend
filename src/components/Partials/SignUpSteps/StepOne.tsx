import { useRef } from "react";
import StepFrame from "./StepFrame";
import TextInput from "../../common/Inputs/TextInput";
//Step one handles the first name

const StepOne = () => {

    const firstNameRef = useRef<HTMLInputElement>(null);

    const firstNameInput = (
        <div>
            <TextInput
                inref={firstNameRef}
                type="text"
                id="first_name"
                name="first_name"
                label="First Name"
                disabled={false}
                required={true}
            />
        </div>
    );


    return (
        <>
            <StepFrame
                childOne={firstNameInput}
                next={true}
                nextStep={2}
                refName={firstNameRef}
            />
        </>
    );
};

export default StepOne;
