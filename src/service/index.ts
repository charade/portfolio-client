import { messageSender } from "./message";
import axios from "axios";

export const baseUrl = "https://charles-ek-portfolio.herokuapp.com";

const request = axios.create({
    baseURL : baseUrl
})
const sendMessage = messageSender(request);

export { sendMessage }
