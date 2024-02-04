import { useRef, useState } from "react";
import StepFrame from "./StepFrame";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CiCalendar } from "react-icons/ci";

// Step seven handles the date of birth
const StepSeven = () => {
    const dobRef = useRef<HTMLInputElement>(null);
    const [startDate, setStartDate] = useState(new Date());

    const dobInput = (
        <div>
            <p className="mb-2 text-lg text-gray-700">What's your date of birth?</p>
            <div className="flex items-center">
                <DatePicker
                    icon={
                        <CiCalendar
                            style={{ width: "1.5rem", height: "1.5rem" }}
                        />
                    }
                    showIcon
                    selected={startDate}
                    className="w-full rounded p-2"
                    onChange={(date) => setStartDate(date!)}
                />
            </div>
            <input type="hidden" id="waanverse_user_dob" name="dob" ref={dobRef} value={startDate.toISOString().slice(0, 10)} />
        </div>
    );

    return (
        <>
            <StepFrame
                childOne={dobInput}
                next={true}
                nextStep={8}
                refName={dobRef}
            />
        </>
    );
};

export default StepSeven;
