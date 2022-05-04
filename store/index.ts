import {combineReducers, configureStore} from '@reduxjs/toolkit';
import searchReducer from './slices/search';
import catalogReducer from './slices/catalog';
import basketReducer from './slices/basket';
import orderReducer from './slices/order';

const rootReducer = combineReducers({
    searchReducer,
    catalogReducer,
    basketReducer,
    orderReducer
});

const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;