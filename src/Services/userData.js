import axios from 'axios';
import { decodeJwt } from "jose";

export const getUserData = async () => {
    try {
        const token = localStorage.getItem("jwt");
        const decoded = decodeJwt(token);
        const response = await axios.get(`http://localhost:8080/api/users/by-email?email=${decoded.sub}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}