
import axios from "axios";
const url = 'https://randomuser.me/api/?results=25';

//api call
export default {
    ApiSearch: function () {
        return axios.get(url)

    }
}