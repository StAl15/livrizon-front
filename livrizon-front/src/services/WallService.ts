import axios from 'axios';
import {roleType} from "../utils/types/types";
import authHeader from "./AuthHeader";


class WallService {

    get(url:string, profile_id: string) {
        axios.get(`${url}/${profile_id}`, { headers: authHeader() })
    }

}

export default new WallService();

