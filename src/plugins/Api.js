import axios from "axios";

export default (() => {
    const instance = axios.create({
        baseURL: "http://localhost:3000"
    });
    
    instance.interceptors.response.use(
        response => {
        return response;
        }
    );
    
    return instance;
})