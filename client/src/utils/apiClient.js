import axios from "axios";

const token = localStorage.getItem("authToken");

const apiClient = axios.create({
  baseURL: "https://event-management-api-seven.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`, // Ensure token is being added
  },
});

export default apiClient;
