import { ICategory } from '@/interfaces/category';
import { ICatalog, ICatalogState } from "@/interfaces/catalog";
import { toCatalogCollection } from "@/utils/catalog";
import { createSlice } from "@reduxjs/toolkit";

const catalogSlice = createSlice({
    name: 'catalog',
    initialState: {
        isLoaded: false,
        currentCategory: '',
        catalogCollection: {},
        categoryCollection: {},
    } as ICatalogState,
    reducers: {
        setData: (state, action) => {
            const catalog = action.payload.catalog;
            const category = action.payload.category;

            const dictionaryCatalog = Object.assign({}, ...catalog?.map((item: ICatalog) => ({ [item.id]: item })));
            const dictionaryCategory = Object.assign({}, ...category?.map((item: ICategory) => ({ [item.id]: item })));

            state.catalogCollection = toCatalogCollection(dictionaryCatalog, category);

            state.categoryCollection = dictionaryCategory;

            state.isLoaded = true;
        },
        setCurrentCategory: (state, action) => {
            console.log(action.payload)
            state.currentCategory = action.payload;
        }
    }
})

export const { setData, setCurrentCategory } = catalogSlice.actions;
export default catalogSlice.reducer;