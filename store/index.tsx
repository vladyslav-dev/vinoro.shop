import React, { useEffect, createContext, useReducer, useMemo } from 'react';

import { IBasketState, BasketHandlers } from '@/interfaces/IBasket';
import { FavoriteState, FavoriteHandlers } from '@/interfaces/IFavorite';
import { IOrderState, OrderHandlers } from '@/interfaces/IOrder';
import { ICategoryState, CategoryHandlers } from '@/interfaces/ICategory';

import { basketReducer, basketInitialState, getBasketHandlers } from './basket';
import { favoritesReducer, favoritesInitialState, getFavoriteHandlers } from './favorite';
import { orderReducer, orderInitialState, getOrderHandlers } from './order';
import { categoryReducer, categoryInitialState, getCategoryHandlers } from './category';

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
    },
    CATEGORY: {
        state: ICategoryState,
        handlers: CategoryHandlers
    }
}

const GlobalContext = createContext<IContext>(null);
const { Provider } = GlobalContext;

const GlobalContextProvider = ({ children, categoryData }) => {

    const [basketState, basketDispatch] = useReducer(basketReducer, basketInitialState)
    const basketHandlers: BasketHandlers = useMemo(() => getBasketHandlers(basketDispatch), [])

    const [favoriteState, favoriteDispatch] = useReducer(favoritesReducer, favoritesInitialState)
    const favoriteHandlers: FavoriteHandlers = useMemo(() => getFavoriteHandlers(favoriteDispatch), [])

    const [orderState, orderDispatch] = useReducer(orderReducer, orderInitialState)
    const orderHandlers: OrderHandlers = useMemo(() => getOrderHandlers(orderDispatch), [])

    const [categoryState, categoryDispatch] = useReducer(categoryReducer, categoryInitialState)
    const categoryHandlers: CategoryHandlers = useMemo(() => getCategoryHandlers(categoryDispatch), [])

    useEffect(() => {
        if (categoryData?.length) { // check categoryState.category is exist?
            categoryHandlers.setCategoryState(categoryData)
        }
    }, [categoryData])

    const providerValue = {
        CATEGORY: {
            state: categoryState,
            handlers: categoryHandlers
        },
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
    }

    return (
        <Provider value={providerValue}>
            {children}
        </Provider>
    );
};

export { GlobalContext, GlobalContextProvider };