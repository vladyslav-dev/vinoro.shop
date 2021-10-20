import { IBasketState, BasketAction, ACTION_TYPES } from '@/interfaces/IBasket';

export const basketInitialState: IBasketState = {
    products: []
};

export const basketReducer = (state: IBasketState, action: BasketAction): IBasketState => {
    switch (action.type) {
        case ACTION_TYPES.INIT_STATE:
            return {
                products: action.payload
            };
        case ACTION_TYPES.ADD_PRODUCT:
            return {
                products: [...state.products, { ...action.payload, quantity: 1 }],
            };

        case ACTION_TYPES.REMOVE_PRODUCT:
            return {
                products: [...state.products.filter(product => product._id !== action.payload)],
            };

        case ACTION_TYPES.INCREASE_COUNT:
            return {
                products: [...state.products.map(product => (
                    product._id === action.payload ? { ...product, quantity: product.quantity + 1 } : { ...product }
                ))]
            };

        case ACTION_TYPES.DECREASE_COUNT:
            return {
                products: [...state.products.map(product => (
                    product._id === action.payload ? { ...product, quantity: product.quantity - 1 } : { ...product }
                ))]
            };

        default:
            return state;
    }
};