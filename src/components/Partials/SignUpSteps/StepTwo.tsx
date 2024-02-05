import TextInput from "../../common/Inputs/TextInput";
import { useRef } from "react";
import StepFrame from "./StepFrame";

const StepTwo = () => {
    const UsernameRef = useRef<HTMLInputElement>(null);

    const lastNameInput = (
        <div>
            <TextInput
                inref={UsernameRef}
                type="text"
                id="waanverse_username"
                name="username"
                label="Username"
                disabled={false}
                required={true}
                minLength={4}
            />
        </div>
    );

    return (
        <>
            <StepFrame
                childOne={lastNameInput}
                next={true}
                nextStep={3}
                refName={UsernameRef}
            />
        </>
    );
};

export default StepTwo;
