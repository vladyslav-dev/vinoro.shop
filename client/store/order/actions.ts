import { UpdateOrderPayload, OrderHandler, OrderAction } from '@/interfaces/IOrder';
import {
    updateOrder,
    setPersonDataValidAction,
    setPaymentDataValid,
} from './action-creators';


export const getOrderHandlers: OrderHandler = (dispatch: React.Dispatch<OrderAction>) => ({
    updateState: (data: UpdateOrderPayload) => {
        dispatch(updateOrder(data));
    },
    setPersonDataValid: (flag: boolean) => {
        dispatch(setPersonDataValidAction(flag));
    },
    setPaymentDataValid: (flag: boolean) => {
        dispatch(setPaymentDataValid(flag));
    },
});