import { ACTION_TYPES } from './action-types';

export const addProduct = payload => ({ type: ACTION_TYPES.ADD_PRODUCT, payload });

export const removeProductById = payload => ({ type: ACTION_TYPES.REMOVE_PRODUCT, payload });

export const increaseCountById = payload => ({ type: ACTION_TYPES.REMOVE_PRODUCT, payload });

export const decreaseCountById = payload => ({ type: ACTION_TYPES.REMOVE_PRODUCT, payload });