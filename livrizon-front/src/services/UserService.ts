import axios from 'axios';
import {MemberType, roleType} from "../utils/types/types";
import authHeader from './AuthHeader';


class UserService {

    create(url: string, user: MemberType) {
        axios.post(url, {
            user
        }, {headers: authHeader()})
            .then(response => {
                return response.data;
            });
    }

}

export default new UserService();

