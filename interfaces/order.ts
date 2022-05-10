import { ILangData } from './general';
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

export interface IOrderData extends Omit<ICollectedOrder, 'isLocal'> {
    mailLanguage?: keyof ILangData;
}

export interface IOrderState {
    personData: IOrder;
    isPersonDataValid: boolean;
    isPaymentValid: boolean;
}

export interface IOrderService {
    sendMail: (order: IOrderData) => Promise<void>;
}