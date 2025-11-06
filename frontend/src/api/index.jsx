import axios from "axios";

// ✅ Automatically switch between local and deployed backend
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
    ? `${process.env.REACT_APP_API_URL}/api`  // For Netlify → Render (Production)
    : "http://localhost:5000/api",             // For local development
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Optional: Automatically add token for authenticated requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;

