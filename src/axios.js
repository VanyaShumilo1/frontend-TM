import axios from "axios";
import dotenv from 'dotenv'

const instance = axios.create({
    baseURL: "https://backend-tm.herokuapp.com"
})
export default instance