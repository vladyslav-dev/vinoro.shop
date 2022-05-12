import $api from "../api/index"
import { IOrderService } from "@/interfaces/order"

const OrderService: IOrderService = {
    sendMail: async (data) => {
        await $api.post("/api/order", { data });
    }
}

export default OrderService;
