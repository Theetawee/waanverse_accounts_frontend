import useAxios from "./useAxios";


const Endpoints = () => {

  const api = useAxios();

  const getSecurityQuestions=async()=>{
    const resp = await api.get("/accounts/get_questions/");
    return resp.data
  }

  const updateQuestions=async(id:number,data:FormData)=>{
    const resp = await api.post(`/accounts/update_qns/${id}/`, data);
    return resp.data
  }

  return {
    getSecurityQuestions,
    updateQuestions
  }
}

export default Endpoints
