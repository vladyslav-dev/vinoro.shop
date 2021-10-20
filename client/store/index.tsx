import React, { createContext, useReducer, useMemo } from 'react';

import { BasketState, BasketHandlers } from '@/interfaces/IBasket';
import { basketReducer, basketInitialState, getBasketHandlers } from './basket';

import {FavoriteState, FavoriteHandlers} from '@/interfaces/IFavorite'
import {favoritesReducer, favoritesInitialState, getFavoritesHandler} from './favorite'


interface IContext {
    basket: {
        state: BasketState;
        handlers: BasketHandlers;
    };
    favaorites: {
        state: FavoriteState;
        handlers: FavoriteHandlers;
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
                basket: {
                    state: basketState,
                    handlers: basketHandlers,
                },
                favaorites: {
                    state: favoriteState,
                    handlers: favoriteHAndlers,
                }
            }}
        >
            {children}
        </Provider>
    );
};

export { GlobalContext, GlobalContextProvider };