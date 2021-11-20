import { IOrderState, OrderAction, ACTION_TYPES } from '@/interfaces/IOrder';

export const orderInitialState: IOrderState = {
    personData: {},
    isPersonDataValid: false,
    isPaymentValid: false,
};

export const orderReducer = (state: IOrderState, action: OrderAction): IOrderState => {
    switch (action.type) {
        case ACTION_TYPES.UPDATE_STATE:
            return {
                ...state,
                personData: {
                    ...state.personData,
                    ...action.payload,
                },
            };

        case ACTION_TYPES.SET_PERSON_DATA_VALID:
            return {
                ...state,
                isPersonDataValid: action.payload,
            };

        case ACTION_TYPES.SET_PAYMENT_DATA_VALID:
            return {
                ...state,
                isPaymentValid: action.payload,
            };

        default: return state;

    }

};