import axios from 'axios';

export default {
    //Get 100 people using the random person api
    getRandomPeople: function() {
        return axios.get("https://randomuser.me/api/?results=100");
    }
}
