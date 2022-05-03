import { createSlice } from "@reduxjs/toolkit";
import { getBasketFromLocalStorage } from './../../utils/basket';
import { IBasketProductCollection, IBulkPrice } from '@/interfaces/product';
import { calcTotalPrice, setBasketToLocalStorage, sortBulkPrice } from '@/utils/basket';

const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        basketProducts: {} as IBasketProductCollection,
        totalPrice: 0,

    },
    reducers: {
        initBasket: (state) => {
            state.basketProducts = getBasketFromLocalStorage();

            state.totalPrice = calcTotalPrice(state.basketProducts);
        },
        addOne: (state, action) => {
            const product = action.payload;
            const price = product.discount_price ?? product.price;

            state.basketProducts[product.id] = {
                ...product,
                quantity: 1,
                current_price: price,
                total_price: price
            };

            state.totalPrice += price;

            setBasketToLocalStorage(state.basketProducts);
        },
        removeOne: (state, action) => {
            delete state.basketProducts[action.payload.id];

            state.totalPrice = calcTotalPrice(state.basketProducts);

            setBasketToLocalStorage(state.basketProducts);
        },
        increaseCount: (state, action) => {
            const product = action.payload;

            state.basketProducts[product.id].quantity += 1;

            const quantity = state.basketProducts[product.id].quantity;

            if (product.bulk_price.length) {
                const sortedBulkPrice = sortBulkPrice(product.bulk_price);

                sortedBulkPrice.forEach((item: IBulkPrice) => {
                    if (item.from <= quantity) {
                        state.basketProducts[product.id].current_price = item.price;
                    }
                })
            }

            state.basketProducts[product.id].total_price = state.basketProducts[product.id].current_price * quantity;

            state.totalPrice = calcTotalPrice(state.basketProducts);

            setBasketToLocalStorage(state.basketProducts);
        },
        decreaseCount: (state, action) => {
            const product = action.payload;
            const price = product.discount_price ?? product.price;

            state.basketProducts[product.id].quantity -= 1;

            const quantity = state.basketProducts[product.id].quantity;

            if (quantity < 1) {
                delete state.basketProducts[product.id];
            } else {
                if (product.bulk_price.length) {
                    const sortedBulkPrice = sortBulkPrice(product.bulk_price);

                    const reversedBulkPrice = sortedBulkPrice.slice().reverse();

                    for (let i = 0; i < reversedBulkPrice.length; i++) {
                        const isLast = i === reversedBulkPrice.length - 1;

                        if (isLast && reversedBulkPrice[i].from >= quantity) {
                            state.basketProducts[product.id].current_price = price;
                            break;
                        }

                        if (reversedBulkPrice[i].from > quantity && reversedBulkPrice[i + 1]?.from <= quantity) {
                             state.basketProducts[product.id].current_price = reversedBulkPrice[i + 1].price;
                             break;
                        }
                    }
                }

                state.basketProducts[product.id].total_price = state.basketProducts[product.id].current_price * quantity;
            }

            state.totalPrice = calcTotalPrice(state.basketProducts);

            setBasketToLocalStorage(state.basketProducts);
        },
        clearBasket: (state) => {
            state.basketProducts = {};
            state.totalPrice = 0;

            setBasketToLocalStorage(state.basketProducts);
        }
    }
})

export const {
    initBasket,
    addOne,
    removeOne,
    increaseCount,
    decreaseCount,
    clearBasket
} = basketSlice.actions;
export default basketSlice.reducer;