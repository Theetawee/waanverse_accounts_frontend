import TextInput from "../../common/Inputs/TextInput";
import { useRef } from "react";
import StepFrame from "./StepFrame";

// Step eight handles the password
const StepEight = () => {
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
            <span className="text-sm text-gray-600">
                Use a strong password with at least 8 characters and numbers
            </span>
        </div>
    );

    return (
        <>
            <StepFrame
                childOne={passwordInput}
                next={true}
                nextStep={9}
                refName={passwordRef}
            />
        </>
    );
};

export default StepEight;
