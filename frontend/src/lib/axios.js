import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://community-533m.vercel.app/api",
    withCredentials: true,
})