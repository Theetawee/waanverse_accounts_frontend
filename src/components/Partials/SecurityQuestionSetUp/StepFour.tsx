import { useContext,useState } from "react";
import { StepContext } from "../../../context/StepContext";
import Endpoints from "../../../hooks/Endpoints";
import { AuthContext } from "../../../context/AuthContext";
import toast from "react-hot-toast";


const StepFour = () => {
    const { data, setData, setStep } = useContext(StepContext);
    const { userInfo,setFastRefresh} = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const { SubmitQuestions} = Endpoints();

    const handleSave = async () => {
        setLoading(true);
        try {
            const resp= await SubmitQuestions(data, userInfo!.id);
            if(resp.message==="success"){
                toast.success("Security questions and answers updated successfully");
                setFastRefresh(true);
            }
        } catch (error) {
            toast.error("Unable to update security questions and answers");
        } finally {
            setLoading(false);
        }
    };

    const handleReset = () => {
        setData([])
        setStep(2)

    }

    return (
        <section className="py-8 px-4 text-gray-700">
            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-3">
                    Points to Keep in Mind:
                </h2>
                <ul className="list-disc px-6">
                    <li>
                        Never share your security questions or answers with
                        anyone, as they are key to safeguarding your account.
                    </li>
                    <li>
                        Ensure your answers are memorable yet private, avoiding
                        easily guessable information.
                    </li>
                    <li>
                        Review your selected questions and answers to ensure
                        accuracy and security.
                    </li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl mb-3 underline">Questions Review</h3>
                <p className="text-lg">
                    1. Question: {data.question1}
                </p>
                <p>Answer: {data.answer1}</p>
                <hr className="h-px border-t border-gray-100 my-4" />
                <p className="text-lg">
                    2. Question: {data.question2}
                </p>
                <p>Answer: {data.answer2}</p>
                <hr className="h-px border-t border-gray-100 my-4" />
            </div>
            <div className="py-10">
                <div className="flex justify-between my-8">
                    <button
                        disabled={loading}
                        onClick={handleReset}
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                    >
                        Reset
                    </button>
                    <button
                        disabled={loading}
                        onClick={handleSave}
                        className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded"
                    >
                        {loading?"Saving...":"Save"}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default StepFour;
