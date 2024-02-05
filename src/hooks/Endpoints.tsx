import useAxios from "./useAxios";

const Endpoints = () => {

  const api = useAxios();

  const handlePasswordReset = async (data: string) => {
    const formData = new FormData();
    formData.append('email',data)
    const resp = await api.post("/accounts/password/reset/", formData);
    return resp.data;
  }


  const handlePasswordResetConfirm = async (data: { uid: string, token: string, new_password1: string, new_password2: string }) => {
    const resp = await api.post("/accounts/password/reset/confirm/", data);
    return resp.data;
  }


  return {
    handlePasswordReset,
    handlePasswordResetConfirm
  }
}

export default Endpoints
