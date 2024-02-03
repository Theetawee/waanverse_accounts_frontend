import TextInput from "../../common/Inputs/TextInput";
import { useRef } from "react";
import StepFrame from "./StepFrame";

// Step six handles the country
const StepSix = () => {
    const countryRef = useRef<HTMLInputElement>(null);

    const countryInput = (
        <div>
            <TextInput
                inref={countryRef}
                type="text"
                id="country"
                name="country"
                label="Country"
                disabled={false}
                required={true}
            />
        </div>
    );

    return (
        <>
            <StepFrame
                childOne={countryInput}
                next={true}
                nextStep={7}
                refName={countryRef}
            />
        </>
    );
};

export default StepSix;
