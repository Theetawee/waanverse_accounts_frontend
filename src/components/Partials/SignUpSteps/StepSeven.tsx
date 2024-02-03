import TextInput from "../../common/Inputs/TextInput";
import { useRef } from "react";
import StepFrame from "./StepFrame";

// Step seven handles the date of birth
const StepSeven = () => {
    const dobRef = useRef<HTMLInputElement>(null);

    const dobInput = (
        <div>
            <TextInput
                inref={dobRef}
                type="date"
                id="dob"
                name="dob"
                label="Date of Birth"
                disabled={false}
                required={true}
            />
        </div>
    );

    return (
        <>
            <StepFrame
                childOne={dobInput}
                next={true}
                nextStep={8}
                refName={dobRef}
            />
        </>
    );
};

export default StepSeven;
