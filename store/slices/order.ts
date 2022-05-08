import { createSlice } from "@reduxjs/toolkit";
import { IOrderState } from '@/interfaces/order';

const initialPersonData = {
    name: '',
    surname: '',
    email: '',
    phone: '',
    city: '',
    isLocal: undefined,
    local_address: '',
    post_adress: '',
    post_number: '',
    payment: '',
    products: {}
}

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        personData: initialPersonData,
        isPersonDataValid: false,
        isPaymentValid: false,
    } as IOrderState,
    reducers: {
        setData: (state, action) => {
            state.personData = {
                ...state.personData,
                ...action.payload,
            }
        },
        setPaymentValid: (state, action) => {
            state.isPaymentValid = action.payload;
        },
        setPersonalDataValid: (state, action) => {
            state.isPersonDataValid = action.payload;
        },
        resetData: (state) => {
            state.isPaymentValid = false;
            state.isPersonDataValid = false;
            state.personData = initialPersonData;
        }
    }
})

export const { setData, setPaymentValid, setPersonalDataValid, resetData } = orderSlice.actions;
export default orderSlice.reducer;