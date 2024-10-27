import axios from "axios"
export default {

    getList: (cursor) => {
        return axios.get('http://localhost:8080/api/v2/performances', {
            params: {
                cursor: cursor
            },
            headers: {
                'accept': '*/*'
            }
        });
    }

}