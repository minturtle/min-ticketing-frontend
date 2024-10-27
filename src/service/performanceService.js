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
    },

    getPerformanceDetail: (uid) => {
        return axios.get(`http://localhost:8080/api/performances/${uid}`, {
            headers: {
                'accept': '*/*'
            }
        });
    },

    getSeatsInfo: (performanceUid, dateUid) => {
        return axios.get(`http://localhost:8080/api/performances/${performanceUid}/dates/${dateUid}`, {
            headers: {
                'accept': '*/*'
            }
        });
    }

}