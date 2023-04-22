import $api from "../api/index"
import { IOrderService } from "@/interfaces/order"

const OrderService: IOrderService = {
    sendMail: async (data) => {
        const response = await $api.post("/api/order", { data });
        return response;
    }
}

export default OrderService;
