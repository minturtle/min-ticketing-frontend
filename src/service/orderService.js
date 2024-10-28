import { authAxios } from "../utils/axiosConfig";
export default {

    getCarts: () => {
        return authAxios.get("/api/orders/carts")
    },

    createCartInfo: (cartUidList) => {
        return authAxios.post('/api/orders/toss/info', {
            cartUidList: cartUidList
        }, {
            headers: {
                'Content-Type': 'application/json',
                'accept': '*/*'
            }
        });
    }


}