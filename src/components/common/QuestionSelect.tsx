/* eslint-disable @typescript-eslint/no-explicit-any */
import Select from "react-select";


interface props{
    label: string
    questions: string[]
    onChange: any,
    name: string,


}


const QuestionSelect = ({ label,name ,questions, onChange }: props) => {
    const options = questions.map((question) => ({
        value: question,
        label: question,
    }));

    return (
        <div className="text-gray-700">
            <label htmlFor={name} className="block mb-2">{label}</label>
            <Select name={name} id={name}  options={options} onChange={onChange} />
        </div>
    );
};

export default QuestionSelect
