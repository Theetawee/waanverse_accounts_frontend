import TextInput from "../../common/Inputs/TextInput";
import { useRef ,useState} from "react";
import StepFrame from "./StepFrame";
import utils from "../../../hooks/utils";
const StepThree = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const [emailInputVal, setEmailInputVal] = useState<string>("");
    const [cleanEmail, setCleanEmail] = useState<string>("...");
    const {generateWaanverseEmail } = utils();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmailInputVal(event.target.value);
        const value = event.target.value;
        if(value === "") {
            setCleanEmail("...");
            return;
        }
        const email = generateWaanverseEmail(value);
        setCleanEmail(email!);
    }


    const emailInput = (<>
        <div className="relative">
            <TextInput
                inref={emailRef}
                type="text"
                id="waanverse_email"
                name="waanverse_email"
                label="Email"
                onChange={handleChange}
                disabled={false}
                required={true}
                setValue={true}
                value={emailInputVal}
            />
            <div className="absolute top-1/2 transform -translate-y-1/2 right-4 text-gray-500">
                @waanverse.com
            </div>
        </div>
        <span className="text-sm text-gray-700">
            <span className="text-red-500">*</span>your email will look like this <span className="text-primary-600">{cleanEmail}</span>
        </span>
    </>
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
