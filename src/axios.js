import axios from "axios";

const instance = axios.create({
    baseURL: proces.env.REACT_APP_API_URL || "http://localhost:5000"
})
export default instance