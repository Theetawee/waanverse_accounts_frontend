/* eslint-disable @typescript-eslint/no-explicit-any */
import Select from "react-select";
import { QuestionType } from "../../hooks/types";

interface props {
    label: string;
    questions: QuestionType[];
    onChange: any;
    name: string;
}

const QuestionSelect = ({ label, name, questions, onChange }: props) => {
    const options = questions.map((question) => ({
        value: question.id,
        label: question.question,
        uses: question.uses,
    }));
    return (
        <div className="text-gray-700">
            <label htmlFor={name} className="block mb-2 text-gray-700  ">
                {label}
            </label>
            <Select
                name={name}
                id={name}
                options={options}
                onChange={onChange}
            />
        </div>
    );
};

export default QuestionSelect;
