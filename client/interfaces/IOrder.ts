import { IProduct } from './IProduct';

export interface IOrder {
    _id?: string,
    order_id?: string;
    name?: string,
    surname?: string,
    email?: string,
    phone?: string,
    city?: string,
    zpAddress?: string | null; // Zaporizhzhia address
    postDepartment?: string | null; // post address
    payment?: string,
    createdAt?: Date,
    products?: IProduct[]
}

export interface IOrderState {
    personData: IOrder;
    isPersonDataValid: boolean;
    isPaymentValid: boolean;
}

export enum ACTION_TYPES {
    UPDATE_STATE = 'order/update-state',
    SET_PERSON_DATA_VALID = 'order/set-person-data-valid',
    SET_PAYMENT_DATA_VALID = 'order/set-payment-data-valid',
}

export type UpdateOrderPayload = { [key: string]: string | Date | IProduct[] | null }

export interface IUpdatePersonDataAction {
    type: ACTION_TYPES.UPDATE_STATE;
    payload: UpdateOrderPayload
}

export interface ISetPesonDataValidAction {
    type: ACTION_TYPES.SET_PERSON_DATA_VALID;
    payload: boolean;
}

export interface ISetPaymentDataValidAction {
    type: ACTION_TYPES.SET_PAYMENT_DATA_VALID;
    payload: boolean
}

export type OrderAction =
    IUpdatePersonDataAction
    | ISetPesonDataValidAction
    | ISetPaymentDataValidAction;

export interface OrderHandlers {
    updateState: (data: UpdateOrderPayload) => void;
    setPersonDataValid: (flag: boolean) => void;
    setPaymentDataValid: (flag: boolean) => void;
}

export type OrderHandler = (dipsatch: React.Dispatch<OrderAction>) => OrderHandlers;
