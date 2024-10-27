import { publicAxios, authAxios } from "../utils/axiosConfig";
export default {

    getList: (cursor) => {
        return publicAxios.get('/api/v2/performances', {
            params: {
                cursor: cursor
            },
            headers: {
                'accept': '*/*'
            }
        });
    },

    getPerformanceDetail: (uid) => {
        return publicAxios.get(`/api/performances/${uid}`, {
            headers: {
                'accept': '*/*'
            }
        });
    },

    getSeatsInfo: (performanceUid, dateUid) => {
        return authAxios.get(`/api/performances/${performanceUid}/dates/${dateUid}`);
    },

    reserveSeat: (performanceId, dateId, seatUid) => {
        return authAxios.post(
            `/api/reservations/${performanceId}/dates/${dateId}/seats/${seatUid}`,
        );
    }

}