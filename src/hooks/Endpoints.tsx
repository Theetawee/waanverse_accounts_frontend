import { UserType } from "./types";
import useAxios from "./useAxios";

const Endpoints = () => {

  const api = useAxios();

  const getUserInfo = async ():Promise<UserType> => {
    const resp = await api.get("/accounts/me/");
    return resp.data;
  }

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

const updateProfileImage = async (data: Blob) => {
    const formData = new FormData();
    formData.append("profile_image", data, "profile_image.webp");
    const response = await api.post("/accounts/update/image/", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    return response.data;
};



  return {
    handlePasswordReset,
    handlePasswordResetConfirm,
    getUserInfo,
    updateProfileImage
  }
}

export default Endpoints
