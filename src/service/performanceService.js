import { publicAxios, authAxios } from "../utils/axiosConfig";
export default {

    getList: (cursor) => {
        return publicAxios.get('/api/performances', {
            params: {
                cursor: cursor
            },
            headers: {
                'accept': '*/*'
            }
        });
    },

    search: async ({ keyword, date, minPrice, maxPrice, region, cursor = null, limit = 10 }) => {

        // 쿼리 파라미터 객체 생성
        const params = new URLSearchParams();

        // 기본 페이지네이션 파라미터
        if (cursor) params.append('cursor', cursor);
        params.append('limit', limit.toString());

        // 검색 조건 파라미터
        if (keyword) params.append('q', keyword);
        if (date) params.append('showTime', formatDateWithOffset(date));
        if (minPrice) params.append('minPrice', minPrice.toString());
        if (maxPrice) params.append('maxPrice', maxPrice.toString());

        if (region) params.append('region', region);

        // API 호출
        return publicAxios.get(
            `/api/performances/search?${params.toString()}`,
            {
                headers: {
                    'accept': '*/*'
                }
            }
        );


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
    },

    getRegions: () => {
        return publicAxios.get("/api/performances/regions");
    }

}

const formatDateWithOffset = (dateString) => {
    if (!dateString) return null;

    // 선택된 날짜로 Date 객체 생성
    const date = new Date(dateString);

    // 클라이언트의 시간대 오프셋을 분 단위로 가져옴
    const offsetMinutes = date.getTimezoneOffset();
    const offsetHours = Math.abs(Math.floor(offsetMinutes / 60));
    const offsetMins = Math.abs(offsetMinutes % 60);

    // 오프셋 문자열 생성 (예: +09:00 또는 -05:00)
    const offsetSign = offsetMinutes <= 0 ? '+' : '-';
    const offsetString = `${offsetSign}${offsetHours.toString().padStart(2, '0')}:${offsetMins.toString().padStart(2, '0')}`;

    // 날짜를 ISO 문자열로 변환하고 원하는 형식으로 포맷
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}T00:00:00${offsetString}`;
};