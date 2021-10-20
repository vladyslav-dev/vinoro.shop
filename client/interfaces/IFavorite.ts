import { IProduct } from '@/interfaces/IProduct';

export interface IFavoriteProduct extends Omit<IProduct, "category" | "order_id" | "description" > {}

export interface FavoriteState {
    products: Array<IFavoriteProduct>;
}

export enum ACTION_TYPES {
    INIT_STATE = 'favorite/init-state',
    ADD_PRODUCT = 'favorite/add-product',
    REMOVE_PRODUCT = 'favorite/remove-product'
}

interface IInitState {
    type: ACTION_TYPES.INIT_STATE;
    payload: Array<IFavoriteProduct>
}

interface IAddProduct {
    type: ACTION_TYPES.ADD_PRODUCT;
    payload: IFavoriteProduct
}

interface IRemoveProduct {
    type: ACTION_TYPES.REMOVE_PRODUCT;
    payload: string
}

export type FavoriteAction = IInitState | IAddProduct | IRemoveProduct 

export interface FavoriteHandlers {
    initState: (state: Array<IFavoriteProduct>) => void;
    addProduct: (product: IFavoriteProduct) => void;
    removeProduct: (productId: string) => void;
}

export type FavoriteHandler = (dispatch: React.Dispatch<FavoriteAction>) => FavoriteHandlers