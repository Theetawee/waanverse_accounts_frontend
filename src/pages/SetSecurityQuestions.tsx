import Seo from "../components/utils/Seo";
import { StepOne, StepTwo,StepThree, StepFour } from "../components/Partials/SecurityQuestionSetUp";
import { StepContext } from "../context/StepContext";
import { useContext } from "react";

const SetSecurityQuestions = () => {
    const { step} = useContext(StepContext);

    return (
        <Seo title="Set Security Questions" description="Set Security Questions that will be used to recover your account">
            {step === 1 && (
                <>
                    <StepOne/>
                </>
            )}
            {step === 2 && (
                <>
                    <StepTwo/>
                </>
            )}
            {step === 3 && (
                <>
                    <StepThree/>
                </>
            )}
            {step === 4 && (
                <>
<StepFour/>

                </>
            )}
        </Seo>
    );
};

export default SetSecurityQuestions;
