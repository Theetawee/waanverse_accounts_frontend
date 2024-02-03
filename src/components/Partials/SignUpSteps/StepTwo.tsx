import TextInput from "../../common/Inputs/TextInput";
import { useRef } from "react";
import StepFrame from "./StepFrame";

const StepTwo = () => {
    const lastNameRef = useRef<HTMLInputElement>(null);

    const lastNameInput = (
        <div>
            <TextInput
                inref={lastNameRef}
                type="text"
                id="waanverse_last_name"
                name="last_name"
                label="Last Name"
                disabled={false}
                required={true}
            />
        </div>
    );

    return (
        <>
            <StepFrame
                childOne={lastNameInput}
                next={true}
                nextStep={3}
                refName={lastNameRef}
            />
        </>
    );
};

export default StepTwo;
