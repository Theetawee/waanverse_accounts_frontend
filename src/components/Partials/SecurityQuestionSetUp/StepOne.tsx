import { AuthContext } from "../../../context/AuthContext";
import { useContext } from "react";
import { StepContext } from "../../../context/StepContext";


const StepOne = () => {
    const { userInfo } = useContext(AuthContext);
    const { setStep } = useContext(StepContext);

    const name = `${userInfo?.first_name} ${userInfo?.last_name}`;


  return (
      <section className="py-8 px-4">
          <div className="w-full max-w-screen-md text-gray-600 mx-auto">
              <h1 className="text-2xl mb-8">
                  Hello {name}, we apologize for any inconvenience. Setting up
                  security questions is crucial for the protection and easy
                  recovery of your account.
              </h1>
              <p className="text-xl mb-2">Here's what is required of you:</p>
              <ul className="list-decimal text-lg p-4">
                  <li>Choose two security questions from the list provided.</li>
                  <li className="mb-1">
                      Provide a unique answer to each selected question.
                  </li>
                  <p className="mb-1">
                      <span className="font-bold">Note:</span> Safeguard this
                      information and avoid sharing it with others. It is
                      essential for recovering your account.
                  </p>
                  <p className="mb-1">
                      You can modify these security questions at any time
                      through your account settings.
                  </p>
                  <p className="mb-1">
                      In the event of forgetting your security answers,
                      contacting support will be necessary to reset your
                      password.
                  </p>
              </ul>
              <div className="flex justify-end py-6">
                  <button
                      className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => setStep(2)}
                  >
                      Next
                  </button>
              </div>
          </div>
      </section>
  );
}

export default StepOne
