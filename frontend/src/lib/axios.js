import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://comm-psvy.onrender.com/api",
    withCredentials: true,
})
