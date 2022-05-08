import { ICategory, ICategoryCollection } from '@/interfaces/category';
import { ICatalog, ICatalogCollection } from "@/interfaces/catalog";
import { toCatalogCollection } from "@/utils/catalog";
import { createSlice } from "@reduxjs/toolkit";

export interface ICatalogState {
    isLoaded: boolean;
    isMenuOpen: boolean;
    isCatalogOpen: boolean;
    currentCatalog: string;
    currentCategory: string;
    catalogCollection: ICatalogCollection;
    categoryCollection: ICategoryCollection;
}

const catalogSlice = createSlice({
    name: 'catalog',
    initialState: {
        isLoaded: false,
        isMenuOpen: false,
        isCatalogOpen: false,
        currentCatalog: '',
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
        setCurrentCatalog: (state, action) => {
            state.currentCatalog = action.payload;
        },
        setCurrentCategory: (state, action) => {
            state.currentCategory = action.payload;
        },
        setMenuOpen: (state, action) => {
            state.isMenuOpen = action.payload;
        },
        setCatalogOpen: (state, action) => {
            state.isCatalogOpen = action.payload;
        }
    }
})

export const { setData, setCurrentCategory, setCurrentCatalog, setMenuOpen, setCatalogOpen } = catalogSlice.actions;
export default catalogSlice.reducer;