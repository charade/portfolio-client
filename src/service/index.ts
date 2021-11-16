import { messageSender } from "./message";
import axios from "axios";

export const baseUrl = "http://localhost:8080";

const request = axios.create({
    baseURL : baseUrl
})
const sendMessage = messageSender(request);

export { sendMessage }
