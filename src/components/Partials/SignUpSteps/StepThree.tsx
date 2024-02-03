import TextInput from "../../common/Inputs/TextInput";
import { useRef } from "react";
import StepFrame from "./StepFrame";

const StepThree = () => {
    const emailRef = useRef<HTMLInputElement>(null);

    const emailInput = (
        <div className="relative">
            <TextInput
                inref={emailRef}
                type="text"
                id="waanverse_email"
                name="waanverse_email"
                label="Email"
                disabled={false}
                required={true}
            />
            <div className="absolute top-1/2 transform -translate-y-1/2 right-4 text-gray-500">
                @waanverse.com
            </div>
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
