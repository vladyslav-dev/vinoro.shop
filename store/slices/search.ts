import { ISearchProduct } from './../../interfaces/product';
import { createSlice } from "@reduxjs/toolkit";
import { ISearchCategory, ISearchCategoryCollection } from '@/interfaces/category';

export interface ISearchState {
    searchProducts: ISearchProduct[];
    searchCategory: ISearchCategoryCollection;
}

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchProducts: {},
        searchCategory: {},
    } as ISearchState,
    reducers: {
        setSearchData: (state, action) => {
            state.searchProducts = action.payload.searchProducts;
            state.searchCategory = Object.assign({}, ...action.payload.searchCategory?.map((item: ISearchCategory) => {
                return { [item.id]: item.category_name }
            }))
        },
    }
})

export const { setSearchData } = searchSlice.actions;
export default searchSlice.reducer;