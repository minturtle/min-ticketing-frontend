import { authAxios } from "../utils/axiosConfig";
export default {

    getCarts: () => {
        return authAxios.get("/api/orders/carts")
    },

    createOrderInfo: (cartUidList) => {
        return authAxios.post('/api/orders/toss/info', {
            cartUidList: cartUidList
        }, {
            headers: {
                'Content-Type': 'application/json',
                'accept': '*/*'
            }
        });
    },

    confirmOrder: ({ paymentType, orderId, paymentKey, amount }) => {
        return authAxios.post('/api/orders/toss/confirm', {
            paymentType: paymentType,
            orderId: orderId,
            paymentKey: paymentKey,
            amount: amount
        }, {
            headers: {
                'Content-Type': 'application/json',
                'accept': '*/*'
            }
        });

    },

    getOrders: (cursor) => {
        return authAxios.get('/api/orders', {
            headers: {
                'accept': '*/*'
            },
            params: cursor ? { cursor } : {} // cursor가 있을 때만 파라미터로 전달
        });
    }

}