import { BasketState, BasketAction, ACTION_TYPES } from '@/interfaces/IBasket';

export const basketInitialState: BasketState = {
    products: []
};

export const basketReducer = (state: BasketState, action: BasketAction) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, { ...action.payload, quantity: 1 }],
            };

        case ACTION_TYPES.REMOVE_PRODUCT:
            return {
                ...state,
                products: [...state.products.filter(product => product._id !== action.payload)],
            };

        case ACTION_TYPES.INCREASE_COUNT:
            return {
                ...state,
                // products: [...state.products.find(product => product._id)]
            };

        case ACTION_TYPES.DECREASE_COUNT:
            return {
                ...state,
            };

        default:
            return state;
    }
};