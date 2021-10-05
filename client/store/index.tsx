import React, { createContext, useReducer, useMemo } from 'react';

import { basketReducer, basketInitialState, getBasketHandlers } from './basket';

const GlobalContext = createContext({});
const { Provider } = GlobalContext;

const GlobalContextProvider = ({ children }) => {

    const [basketState, basketDispatch] = useReducer(basketReducer, basketInitialState);
    const basketHandlers = useMemo(() => getBasketHandlers(basketDispatch), []);

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