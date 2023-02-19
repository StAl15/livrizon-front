import {roleType} from "../utils/types/types";
import axios from 'axios';


class AuthService {
    login = (url: string, username: string, password: string) => {
        return axios
            .post(url, {
                username,
                password
            })
            .then((response: any) => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout = () => {
        localStorage.removeItem("user");
    }

    register = (url: string, username: string, email: string, password: string, avatar: string, role: roleType) => {
        return axios.post(url, {
            username,
            email,
            password,
            avatar,
            role
        });
    }

    getCurrentUser = () => {
        return JSON.parse(localStorage.getItem('user') || "")
    }


}

export default new AuthService();

