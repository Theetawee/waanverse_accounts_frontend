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
                id="phone_nummber"
                name="phone_nummber"
                label="Phone Number"
                disabled={false}
                required={true}
            />
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
