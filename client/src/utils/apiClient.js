import axios from "axios";

const token = localStorage.getItem("authToken");

const apiClient = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`, // Ensure token is being added
  },
});

export default apiClient;
