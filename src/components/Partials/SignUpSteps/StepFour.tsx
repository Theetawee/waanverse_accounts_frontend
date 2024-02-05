import TextInput from "../../common/Inputs/TextInput";
import { useRef } from "react";
import StepFrame from "./StepFrame";

// Step eight handles the password
const StepFour = () => {
    const passwordRef = useRef<HTMLInputElement>(null);

    const passwordInput = (
        <div>
            <TextInput
                inref={passwordRef}
                type="password"
                id="password"
                name="password1"
                label="Password"
                disabled={false}
                required={true}
            />
        </div>
    );

    return (
        <>
            <StepFrame
                childOne={passwordInput}
                next={true}
                nextStep={5}
                refName={passwordRef}
            />
        </>
    );
};

export default StepFour;
