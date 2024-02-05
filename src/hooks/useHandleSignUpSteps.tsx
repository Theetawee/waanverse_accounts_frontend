import { useContext, useState, RefObject } from "react";
import { StepContext } from "../context/StepContext";
import utils from "./utils";
import useSignup from "./useSignup";

const useHandleSignUpSteps = (
    refName?: RefObject<HTMLInputElement>,
    nextStep?: number
) => {
    const [error, setError] = useState<string | null>(null);
    const { signup, isLoading, errors } = useSignup();

    const { setData, setStep, data } = useContext(StepContext);
    const { validate_data } = utils();

    const inavlidateInput = () => {
        if (refName?.current) {
            refName.current.className = refName.current.className +=
                " border-red-500 border-2";
        }
    };

    const handleNext = () => {
        setError(null);
        if (refName?.current) {
            if (refName.current.value !== "") {
                if (refName.current.name === "email") {
                    const isValid = validate_data(
                        "email",
                        refName.current.value
                    );
                    if (isValid) {
                        setData((prev) => ({
                            ...prev,
                            [refName.current!.name]: refName.current!.value,
                        }));
                    } else {
                        inavlidateInput();
                        setError("Please provide a valid email address");
                        return;
                    }
                } else if (refName.current.name === "username") {
                    const isValid = validate_data(
                        "username",
                        refName.current.value
                    );
                    if (isValid) {
                        setData((prev) => ({
                            ...prev,
                            [refName.current!.name]: refName.current!.value,
                        }));
                    } else {
                        inavlidateInput();
                        setError(
                            "Please enter a valid username with atleast 4"
                        );
                        return;
                    }
                } else if (refName.current.name === "phone") {
                    const isValid = validate_data(
                        "phone",
                        refName.current.value
                    );
                    if (isValid) {
                        setData((prev) => ({
                            ...prev,
                            [refName.current!.name]: refName.current!.value,
                        }));
                    } else {
                        inavlidateInput();
                        setError("Please enter a valid phone number");
                        return;
                    }
                } else if (refName.current.name === "password1") {
                    const isValid = validate_data(
                        "password",
                        refName.current.value
                    );
                    if (isValid) {
                        setData((prev) => ({
                            ...prev,
                            [refName.current!.name]: refName.current!.value,
                        }));
                    } else {
                        inavlidateInput();
                        setError(
                            "Please enter a valid password with atleast 8 characters with atleast one uppercase, one lowercase, one number and one special character"
                        );
                        return;
                    }
                } else if (refName.current.name === "password2") {
                    const isValid = validate_data(
                        "password",
                        refName.current.value
                    );
                    if (isValid) {
                        const password1 = data.password1
                        const password2 = refName.current.value
                        if (password1 !== password2) {
                            inavlidateInput();
                            setError(
                                "Passwords do not match."
                            )
                            return;
                        }
                        setData((prev) => ({
                            ...prev,
                            [refName.current!.name]: refName.current!.value,
                        }));
                    } else {
                        inavlidateInput();
                        setError(
                            "Please enter a valid password with atleast 8 characters with atleast one uppercase, one lowercase, one number and one special character"
                        );
                        return;
                    }
                } else {
                    setData((prev) => ({
                        ...prev,
                        [refName.current!.name]: refName.current!.value,
                    }));
                }
                setStep(nextStep!);
            } else {
                inavlidateInput();
                return;
            }
        }
    };

    const handleSubmit = async () => {
        await signup(data);
    };

    return {
        handleNext,
        error,
        handleSubmit,
        isLoading,
        signupErrors: errors,
    };
};

export default useHandleSignUpSteps;
