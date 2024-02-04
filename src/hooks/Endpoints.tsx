import useAxios from "./useAxios";
import { QuestionType, QuestionsSumitType } from "./types";

const Endpoints = () => {

  const api = useAxios();

  const getSecurityQuestionsStepOne=async():Promise<QuestionType[]>=>{
    const resp = await api.get("/accounts/security_questions_one/");
    return resp.data
  }

  const getSecurityQuestionsStepTwo = async (): Promise<QuestionType[]> => {
      const resp = await api.get("/accounts/security_questions_two/");
      return resp.data;
  };



  const updateQuestions=async(id:number,data:FormData)=>{
    const resp = await api.post(`/accounts/update_qns/${id}/`, data);
    return resp.data
  }

  const SubmitQuestions = async (data: QuestionsSumitType,id:number) => {
    const response = await api.post(`/accounts/update_security_questions/${id}/`, data);
    return response.data
  }

  return {
    getSecurityQuestionsStepOne,
    getSecurityQuestionsStepTwo,
    updateQuestions,
    SubmitQuestions
  }
}

export default Endpoints
