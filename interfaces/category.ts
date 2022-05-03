import { ILangData } from "./general";

export interface ICategory {
    id: string;
    order_id: number;
    category_name: ILangData;
    category_image: string;
    visibility: boolean;
    catalog: string
};

export interface ISearchCategory {
    id: string;
    category_name: ILangData;
}

export interface ICategoryService {
    getAll: () => Promise<ICategory[]>;
    getSearchCategory: () => Promise<ISearchCategory>;
}

export interface ICategoryCollection {
    [categoryId: string]: ICategory;
}