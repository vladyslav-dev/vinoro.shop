import { ILangData } from '@/interfaces/general';

export interface IBulkPrice {
    id: string;
    from: number;
    price: number;
};

export interface IProduct {
    id: string;
    order_id: number;
    name: ILangData;
    description: ILangData;
    image: string;
    price: number;
    discount_price: number | null;
    bulk_price: Array<IBulkPrice>;
    new: boolean;
    product_count: number;
    availability: boolean;
    visibility: boolean;
    published_date: Date;
    modified_date: Date;
    category: string;
};

export interface IBasketProduct {
    id: string;
    name: ILangData;
    image: string;
    price: number;
    discount_price: number | null;
    bulk_price: Array<IBulkPrice>;
    quantity: number;
    total_price: number;
    current_price: number;
}

export interface IBasketProductCollection {
    [key: string]: IBasketProduct;
}

export interface ISearchProduct {
    id: string;
    name: ILangData;
    category: string;
}

export interface IProductService {
    getAll: () => Promise<IProduct[]>;
    getSearchProducts: () => Promise<ISearchProduct[]>
    getByCategoryId: (categoryId: string) => Promise<IProduct[]>;
    getOne: (id: string) => Promise<IProduct>;
}