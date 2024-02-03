import { useQuery } from "@tanstack/react-query";
import Endpoints from "../../hooks/Endpoints";
import QuestionSelect from "../common/QuestionSelect";
import Input from "../common/Input";
import { useState,useContext } from "react";
import Loader from "../common/Loader";
import CommonError from "../common/CommonError";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";


interface Option {
    value: string;
    label: string;
}

const ChooseQuestionAndAnswer = () => {
    const { getSecurityQuestions, updateQuestions } = Endpoints();

    const [selectedTypeOne, setSelectedTypeOne] = useState("");
    const [selectedTypeTwo, setSelectedTypeTwo] = useState("");

    const { userInfo,setFastRefresh} = useContext(AuthContext);


    const handleTypeOneChange = (selectedOption: Option) => {
        setSelectedTypeOne(selectedOption.value);
    };

    const handleTypeTwoChange = (selectedOption: Option) => {
        setSelectedTypeTwo(selectedOption.value);
    };

    const handleSubmit =async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData();
        const answer_one = e.currentTarget.type_one_answer.value;
        const answer_two = e.currentTarget.type_two_answer.value;
        formData.append("question1", selectedTypeOne);
        formData.append("question2", selectedTypeTwo);
        formData.append("answer1", answer_one);
        formData.append("answer2", answer_two);

        try {
            const response = await updateQuestions(userInfo!.id, formData);
            console.log(response);
            if(response.message==="success"){
                setFastRefresh(true);
                toast.success("Security questions and answers updated successfully");
            }
        }catch{
            toast.error("Unable to update security questions and answers");
        }


    };

    const { data,isError,isPending } = useQuery({
        queryFn: () => getSecurityQuestions(),
        queryKey: ["security_questions"],
    });

    if (isPending) {
        return (
            <Loader/>
        )
    } else if (isError) {
        return (
            <CommonError/>
        );
    }

    if (data) {
        const { questions_type_one, questions_type_two } = data;

        return (
            <form method="post" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-14">
                    <div className="grid grid-cols-1 gap-6">
                        <div className="z-30">
                            <QuestionSelect
                                label="First Question"
                                name="type_one"
                                questions={questions_type_one}
                                onChange={handleTypeOneChange}
                            />
                        </div>

                        <Input
                            type="text"
                            label="Your answer"
                            name="type_one_answer"
                            disabled={false}
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="z-20">
                            <QuestionSelect
                                label="Second Question"
                                name="type_two"
                                questions={questions_type_two}
                                onChange={handleTypeTwoChange}
                            />
                        </div>
                        <Input
                            type="text"
                            label="Your answer"
                            name="type_two_answer"
                            disabled={false}
                        />

                        <div>
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Save Answers
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }


};

export default ChooseQuestionAndAnswer;
