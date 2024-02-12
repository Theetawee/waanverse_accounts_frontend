/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserDetailType } from "./types";
import useAxios from "./useAxios";

const Endpoints = () => {

  const api = useAxios();

  const getUserInfo = async ():Promise<UserDetailType> => {
    const resp = await api.get("/accounts/me/");
    return resp.data;
  }


  const updateUserInfo = async (data:any) => {
    const response = await api.post("/accounts/update/info/", data);
    return response.data;
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


  // change password

  const changePassword = async (data: { old_password: string, new_password1: string, new_password2: string }) => {
    const response = await api.post("/accounts/password/change/", data);
    return response.data;
  }


  return {
    handlePasswordReset,
    handlePasswordResetConfirm,
    getUserInfo,
    updateProfileImage,
    updateUserInfo,
    changePassword
  }
}

export default Endpoints
