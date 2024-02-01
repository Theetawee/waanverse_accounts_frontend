import { useState } from "react"
import Input from "../components/common/Input"
import useHandleResetPassword from "../hooks/usehandleResetPassword";
import Loader from "../components/common/Loader";


const ResetPasswordPage = () => {

  const { getSecurityQuestions, isLoading,verifyAnswers } = useHandleResetPassword();
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");

  const [gotEmail, setGotEmail] = useState("");
  const [step, setStep] = useState(1);

  const handleEmailSubmit=async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = e.currentTarget.email.value;
    setGotEmail(email);

    const qns = await getSecurityQuestions(email)

    console.log(qns)

    if (qns.question1 !== "" && qns.question1 !== null && qns.question2 !== "" && qns.question2 !== null) {
      setStep(2)
      setQuestion1(qns.question1)
      setQuestion2(qns.question2)
    }


  }


const handleAnswerSubmit=async(e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const answer1 = e.currentTarget.answer1.value
  const answer2 = e.currentTarget.answer2.value
  const resp = await verifyAnswers(gotEmail, answer1, answer2)

  if (resp.data === 'correct') {
    setStep(3)
  }

  }

  const handlePasswordSubmit=async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }






  return (
      <section className="min-h-screen bg-gray-50 px-4 py-16">
          <div>
              <div className="max-w-lg bg-white shadow mx-auto p-4 rounded-xl">
                  {step === 1 && (
                      <>
                          <form method="post" onSubmit={handleEmailSubmit}>
                              <div className="mb-6">
                                  <h1 className="text-3xl mb-2">
                                      Reset Password
                                  </h1>
                                  <p>
                                      Enter your email address and follow the
                                      instructions to reset your password.
                                  </p>
                              </div>
                              <div className="mb-6">
                                  <Input
                                      type="email"
                                      name="email"
                                      label="Email"
                                      disabled={isLoading}
                                  />
                              </div>
                              <div>
                                  <button
                                      disabled={isLoading}
                                      className=" bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded"
                                  >
                                      {isLoading ? <Loader /> : "Continue"}
                                  </button>
                              </div>
                          </form>
                      </>
                  )}
                  {step === 2 &&
                      question1 !== "" &&
                      question1 !== null &&
                      question2 !== "" &&
                      question2 !== null && (
                          <>
                              <form method="post" onSubmit={handleAnswerSubmit}>
                                  <div className="mb-6">
                                      <h2 className="text-3xl mb-2">
                                          Answer the following security
                                          questions and proceed to reset your
                                          password
                                      </h2>
                                  </div>
                                  <div className="mb-6">
                                      <p className="text-gray-700">
                                          {" "}
                                          {question1}
                                      </p>
                                      <Input
                                          type="text"
                                          name="answer1"
                                          label="Answer"
                                          disabled={isLoading}
                                      />
                                  </div>
                                  <div className="mb-6">
                                      <p className="text-gray-700">
                                          {" "}
                                          {question2}
                                      </p>
                                      <Input
                                          type="text"
                                          name="answer2"
                                          label="Answer"
                                          disabled={isLoading}
                                      />
                                  </div>
                                  <div>
                                      <button
                                          disabled={isLoading}
                                          className=" bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded"
                                      >
                                          {isLoading ? <Loader fill="white" /> : "Continue"}
                                      </button>
                                  </div>
                              </form>
                          </>
                      )}

                  {step === 3 && (
                      <>
                          <form method="post" onSubmit={handlePasswordSubmit}>
                              <div className="mb-6">
                                  <h1 className="text-3xl mb-2">
                                      Reset Password
                                  </h1>
                                  <p>Enter your new password.</p>
                              </div>
                              <div className="mb-6">
                                  <Input
                                      type="password"
                                      name="password1"
                                      label="Password"
                                      disabled={isLoading}
                                  />
                              </div>
                              <div className="mb-6">
                                  <Input
                                      type="password"
                                      name="password2"
                                      label="Confirm Password"
                                      disabled={isLoading}
                                  />
                              </div>

                              <div>
                                  <button
                                      disabled={isLoading}
                                      className=" bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded"
                                  >
                                      {isLoading ? <Loader fill="white"/> : "Save"}
                                  </button>
                              </div>
                          </form>
                      </>
                  )}
              </div>
          </div>
      </section>
  );
}

export default ResetPasswordPage
