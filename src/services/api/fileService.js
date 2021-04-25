import { authAxiosCall } from "../axiosCall";

export const uploadFile = async (file) => {
    let formData = new FormData();
    formData.append("file", file);
  return authAxiosCall("file/upload", {
    method: "POST",
    body: formData,
    headers: { "Content-Type": "multipart/form-data" },
  });
};
