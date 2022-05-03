import axios from "axios";

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

const $api = axios.create({
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
    baseURL: API_URL,
});

export default $api;