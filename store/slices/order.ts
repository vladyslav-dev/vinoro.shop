import { createSlice } from "@reduxjs/toolkit";
import { IOrderState } from '@/interfaces/order';

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        personData: {
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
        },
        isPersonDataValid: false,
        isPaymentValid: false,
    } as IOrderState,
    reducers: {
        setData: (state, action) => {
            console.log('set data in reducer')
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
        }
    }
})

export const { setData, setPaymentValid, setPersonalDataValid } = orderSlice.actions;
export default orderSlice.reducer;