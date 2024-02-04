/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import Endpoints from "../../../hooks/Endpoints";
import Loader from "../../common/Loader";
import CommonError from "../../common/CommonError";
import QuestionSelect from "../../common/QuestionSelect";
import { useContext, useRef, useState } from "react";
import TextInput from "../../common/Inputs/TextInput";
import toast from "react-hot-toast";
import { StepContext } from "../../../context/StepContext";

interface valType {
    value: string;
    label: string;
    uses: "text" | "number" | "date" | "address" | "email" | "time";
}

const StepThree = () => {
    const { getSecurityQuestionsStepTwo} = Endpoints();
    const [choosenQuestion, setChoosenQuestion] = useState("");
    const [val, setVal] = useState<valType | null>(null);
    const answerRef = useRef<HTMLInputElement>(null);

    const { setData, setStep } = useContext(StepContext);

    const { data, isPending, isError } = useQuery({
        queryKey: ["security_questions_two"],
        queryFn: () => getSecurityQuestionsStepTwo(),
    });

    const handleChange = (value: valType) => {
        setChoosenQuestion(value.label);
        setVal(value);
    };

    const handleNext = () => {
        if (answerRef.current) {
            if (answerRef.current.value !== "") {
                setData((prev) => ({
                    ...prev,
                    ["answer2"]: answerRef.current!.value,
                }));
                setData((prev) => ({
                    ...prev,
                    ["question2"]: choosenQuestion,
                }))
                setStep(4)

            } else {
                toast.error("Please enter answer");
                answerRef.current.className += " border-red-500 border-2";
                return;
            }
        }
    };

    if (isPending) {
        return <Loader />;
    } else if (isError) {
        return <CommonError />;
    } else {
        return (
            <>
                <section className="py-8 px-4">
                    <QuestionSelect
                        questions={data}
                        label={"Security Question 2"}
                        name={"question2"}
                        onChange={handleChange}
                    />

                    <div className="py-10">
                        {choosenQuestion !== "" && (
                            <>
                                <h2 className="text-lg mb-4 text-gray-700">
                                    Question: {choosenQuestion}{" "}
                                </h2>

                                <div>
                                    <p className="text-sm mb-3 text-gray-700">
                                        Answer should be{" "}
                                        <span className="font-bold">
                                            {val!.uses}
                                        </span>
                                    </p>
                                    <TextInput
                                        inref={answerRef}
                                        name="answer2"
                                        label="Answer"
                                        id="answer2"
                                        disabled={false}
                                        required={true}
                                        type={val!.uses}
                                    />
                                </div>

                                <div className="flex justify-end my-8">
                                    <button
                                        onClick={handleNext}
                                        className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Continue
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </section>
            </>
        );
    }
};

export default StepThree;
