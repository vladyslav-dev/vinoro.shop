import React, { createContext, useReducer, useMemo } from 'react';

import { IBasketState, BasketHandlers } from '@/interfaces/IBasket';
import { FavoriteState, FavoriteHandlers } from '@/interfaces/IFavorite';
import { IOrderState, OrderHandlers } from '@/interfaces/IOrder';

import { basketReducer, basketInitialState, getBasketHandlers } from './basket';
import { favoritesReducer, favoritesInitialState, getFavoriteHandlers } from './favorite';
import { orderReducer, orderInitialState, getOrderHandlers } from './order';


interface IContext {
    BASKET: {
        state: IBasketState;
        handlers: BasketHandlers;
    };
    FAVORITES: {
        state: FavoriteState;
        handlers: FavoriteHandlers;
    };
    ORDER: {
        state: IOrderState;
        handlers: OrderHandlers
    }
}

const GlobalContext = createContext<IContext>(null);
const { Provider } = GlobalContext;

const GlobalContextProvider = ({ children }) => {

    const [basketState, basketDispatch] = useReducer(basketReducer, basketInitialState)
    const basketHandlers: BasketHandlers = useMemo(() => getBasketHandlers(basketDispatch), [])

    const [favoriteState, favoriteDispatch] = useReducer(favoritesReducer, favoritesInitialState)
    const favoriteHandlers: FavoriteHandlers = useMemo(() => getFavoriteHandlers(favoriteDispatch), [])

    const [orderState, orderDispatch] = useReducer(orderReducer, orderInitialState)
    const orderHandlers: OrderHandlers = useMemo(() => getOrderHandlers(orderDispatch), [])

    return (
        <Provider
            value={{
                BASKET: {
                    state: basketState,
                    handlers: basketHandlers,
                },
                FAVORITES: {
                    state: favoriteState,
                    handlers: favoriteHandlers,
                },
                ORDER: {
                    state: orderState,
                    handlers: orderHandlers,
                },
            }}
        >
            {children}
        </Provider>
    );
};

export { GlobalContext, GlobalContextProvider };