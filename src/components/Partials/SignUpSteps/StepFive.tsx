import TextInput from "../../common/Inputs/TextInput";
import { useRef } from "react";
import StepFrame from "./StepFrame";

// Step nine handles the confirm password
const StepFive = () => {
    const confirmPasswordRef = useRef<HTMLInputElement>(null);

    const confirmPasswordInput = (
        <div>
            <TextInput
                inref={confirmPasswordRef}
                type="password"
                id="confirm_password"
                name="password2"
                label="Confirm Password"
                disabled={false}
                required={true}
            />
        </div>
    );

    return (
        <>
            <StepFrame
                childOne={confirmPasswordInput}
                next={true}
                nextStep={6}
                refName={confirmPasswordRef}
            />
        </>
    );
};

export default StepFive;
