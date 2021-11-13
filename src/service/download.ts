import axios from "axios";

export const downloadResume = () => axios.get('http://localhost:8080/download')