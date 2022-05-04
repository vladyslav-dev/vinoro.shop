import { IBasketProductCollection } from "@/interfaces/product";

export interface IOrder {
    name?: string,
    surname?: string,
    email?: string,
    phone?: string,
    city?: string,
    isLocal?: boolean;
    local_address?: string | null; // Zaporizhzhia address
    post_adress?: string | null; // post address
    post_number?: string | null; // post index
    payment?: string,
    products?: IBasketProductCollection
}

export interface ICollectedOrder extends IOrder  {
    order_id?: string;
    created_at?: string;
}

export interface IOrderState {
    personData: IOrder;
    isPersonDataValid: boolean;
    isPaymentValid: boolean;
}