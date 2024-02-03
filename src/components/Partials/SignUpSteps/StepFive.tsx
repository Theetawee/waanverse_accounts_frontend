import TextInput from "../../common/Inputs/TextInput";
import { useRef } from "react";
import StepFrame from "./StepFrame";

// Step five handles the gender
const StepFive = () => {
    const genderRef = useRef<HTMLInputElement>(null);

    const genderInput = (
        <div>
            <TextInput
                inref={genderRef}
                type="text"
                id="gender"
                name="gender"
                label="Gender"
                disabled={false}
                required={true}
            />
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
        </>
    );
};

export default StepFive;
