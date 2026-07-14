import axios from "axios";

const api = axios.create({
    baseURL: "http://103.56.148.93/api",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
});

export default api;