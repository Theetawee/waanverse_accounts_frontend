import Seo from "../components/utils/Seo";
import { StepOne, StepTwo } from "../components/Partials/SecurityQuestionSetUp";
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
        </Seo>
    );
};

export default SetSecurityQuestions;
