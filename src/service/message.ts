import { AxiosInstance } from "axios";
export type FieldsType = {
    message : string,
    email : string
}
export const messageSender = (axios : AxiosInstance) => async({message, email} : FieldsType) => {
    return axios.post('/message', {message, email});
}
