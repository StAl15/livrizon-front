import axios from 'axios';
import {MemberType, roleType, TeamType} from "../utils/types/types";
import authHeader from './AuthHeader';


class TeamService {

    create(url: string, team: TeamType) {
        axios.post(url, {
            team
        }, {headers: authHeader()})
            .then(response => {
                return response.data;
            });
    }

}

export default new TeamService();

