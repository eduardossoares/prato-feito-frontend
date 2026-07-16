import axios from "axios";

// 10s
const TIMEOUT_MS = 10_000;

const backendUrl = process.env.BUN_PUBLIC_BACKEND_URL;
if (!backendUrl) throw new Error("BACKEND_URL not defined");

const api = axios.create({
  baseURL: backendUrl,
  timeout: TIMEOUT_MS,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;
