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
    getAll: () => Promise<IProduct[]>; // all products
    getSearchProducts: () => Promise<ISearchProduct[]> // compressed products for fast search results (in search modal)
    getSearchProductsByIds: (ids: string[]) => Promise<IProduct[]>; // products (for search page) by [id, id, id, ...]
    getByCategoryId: (categoryId: string) => Promise<IProduct[]>; // products (for category page) by category id
    getOne: (id: string) => Promise<IProduct>; // product by id (for product page)
}