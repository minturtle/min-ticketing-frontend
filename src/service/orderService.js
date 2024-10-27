import { publicAxios, authAxios } from "../utils/axiosConfig";
export default {

    getCarts: () => {
        return authAxios.get("/api/orders/carts")
    }


}