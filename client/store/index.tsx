import React, { createContext, useReducer, useMemo } from 'react';
import { IBasketState, BasketHandlers } from '@/interfaces/IBasket';

import { BasketState, BasketHandlers } from '@/interfaces/IBasket';
import { basketReducer, basketInitialState, getBasketHandlers } from './basket';

import {FavoriteState, FavoriteHandlers} from '@/interfaces/IFavorite'
import {favoritesReducer, favoritesInitialState, getFavoritesHandler} from './favorite'


interface IContext {
    BASKET: {
        state: IBasketState;
        handlers: BasketHandlers;
    };
    FAVORITES: {
        state: string;
    }
}

const GlobalContext = createContext<IContext>(null);
const { Provider } = GlobalContext;

const GlobalContextProvider = ({ children }) => {

    const [basketState, basketDispatch] = useReducer(basketReducer, basketInitialState)
    const basketHandlers: BasketHandlers = useMemo(() => getBasketHandlers(basketDispatch), [])

    const [favoriteState, favoriteDispatch] = useReducer(favoritesReducer, favoritesInitialState)
    const favoriteHAndlers: FavoriteHandlers = useMemo(() => getFavoritesHandler(favoriteDispatch), [])

    return (
        <Provider
            value={{
                BASKET: {
                    state: basketState,
                    handlers: basketHandlers,
                },
                FAVORITES: {
                    state: "favorites state"
                }
            }}
        >
            {children}
        </Provider>
    );
};

export { GlobalContext, GlobalContextProvider };