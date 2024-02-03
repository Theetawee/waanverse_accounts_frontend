import TextInput from "../../common/Inputs/TextInput";
import { useRef } from "react";
import StepFrame from "./StepFrame";

const StepThree = () => {
    const emailRef = useRef<HTMLInputElement>(null);

    const emailInput = (
        <div>
            <TextInput
                inref={emailRef}
                type="email"
                id="waanverse_email"
                name="waanverse_email"
                label="Email"
                disabled={false}
                required={true}
            />
        </div>
    );

    return (
        <>
            <StepFrame
                childOne={emailInput}
                next={true}
                nextStep={4}
                refName={emailRef}
            />
        </>
    );
};

export default StepThree;
