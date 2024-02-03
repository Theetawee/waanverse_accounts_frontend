import TextInput from "../../common/Inputs/TextInput";
import { useRef } from "react";
import StepFrame from "./StepFrame";

// Step four handles the phone number
const StepFour = () => {
    const phoneNumberRef = useRef<HTMLInputElement>(null);

    const phoneNumberInput = (
        <div>
            <TextInput
                inref={phoneNumberRef}
                type="text"
                id="phone_number"
                name="phone_number"
                label="Phone Number"
                disabled={false}
                required={true}
            />
            <span className="text-sm text-gray-600">
                Enter a valid phone number with the country code, e.g.,
                +2348012345678.
            </span>
        </div>
    );

    return (
        <>
            <StepFrame
                childOne={phoneNumberInput}
                next={true}
                nextStep={5}
                refName={phoneNumberRef}
            />
        </>
    );
};

export default StepFour;
