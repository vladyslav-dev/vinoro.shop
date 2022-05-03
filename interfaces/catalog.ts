import { ILangData } from '@/interfaces/general';
import { ICategory } from './category';

export interface ICatalog {
    id: string;
    order_id: number;
    catalog_name: ILangData;
    catalog_image: string;
    visibility: boolean;
}

export interface ICatalogDictionary {
    [key: string]: ICatalog;
}

export interface ICatalogService {
    getAll: () => Promise<ICatalog[]>;
}

export interface ICatalogCollection {
    [catalogId: string]: {
        catalog: ICatalog,
        category: ICategory[],
    };
}