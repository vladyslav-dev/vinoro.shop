import { ACTION_TYPES } from './action-types';

export const basketInitialState = {
    products: []
};

export const basketReducer = (state, action) => {
    switch (action.type) {

        case ACTION_TYPES.ADD_PRODUCT:
            return {
                ...state,
            };

        case ACTION_TYPES.REMOVE_PRODUCT:
            return {
                ...state,
            };

        case ACTION_TYPES.INCREASE_COUNT:
            return {
                ...state,
            };

        case ACTION_TYPES.DECREASE_COUNT:
            return {
                ...state,
            };

        default:
            return state;
    }
};