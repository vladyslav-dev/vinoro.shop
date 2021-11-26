
import {
    UpdateOrderPayload,
    IUpdatePersonDataAction,
    ISetPesonDataValidAction,
    ISetPaymentDataValidAction,
    ACTION_TYPES,
} from '@/interfaces/IOrder';

export const updateOrder = (payload: UpdateOrderPayload): IUpdatePersonDataAction => ({
    type: ACTION_TYPES.UPDATE_STATE,
    payload
});

export const setPersonDataValidAction = (payload: boolean): ISetPesonDataValidAction => ({
    type: ACTION_TYPES.SET_PERSON_DATA_VALID,
    payload
});

export const setPaymentDataValid = (payload: boolean): ISetPaymentDataValidAction => ({
    type: ACTION_TYPES.SET_PAYMENT_DATA_VALID,
    payload
});