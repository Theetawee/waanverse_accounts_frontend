import { useRef } from "react";
import StepFrame from "./StepFrame";
import TextInput from "../../common/Inputs/TextInput";
//Step one handles the first name

const StepOne = () => {

    const NameRef = useRef<HTMLInputElement>(null);

    const NameInput = (
        <div>
            <TextInput
                inref={NameRef}
                type="text"
                id="waanverse_user_name"
                name="name"
                label="Name"
                disabled={false}
                required={true}
            />
        </div>
    );


    return (
        <>
            <StepFrame
                childOne={NameInput}
                next={true}
                nextStep={2}
                refName={NameRef}
            />
        </>
    );
};

export default StepOne;
