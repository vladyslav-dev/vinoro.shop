import React, { createContext, useReducer, useMemo } from 'react';
import { BasketState, BasketHandlers } from '@/interfaces/IBasket';

import { basketReducer, basketInitialState, getBasketHandlers } from './basket';

interface IContext {
    basket: {
        state: BasketState;
        handlers: BasketHandlers;
    }
}

const GlobalContext = createContext<IContext>(null);
const { Provider } = GlobalContext;

const GlobalContextProvider = ({ children }) => {

    const [basketState, basketDispatch] = useReducer(basketReducer, basketInitialState);
    const basketHandlers: BasketHandlers = useMemo(() => getBasketHandlers(basketDispatch), []);

    return (
        <Provider
            value={{
                basket: {
                    state: basketState,
                    handlers: basketHandlers,
                },
            }}
        >
            {children}
        </Provider>
    );
};

export { GlobalContext, GlobalContextProvider };