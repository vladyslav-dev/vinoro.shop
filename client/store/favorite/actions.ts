import { IFavoriteProduct, FavoriteAction, FavoriteHandler } from '@/interfaces/IFavorite'
import {
    addFavoriteProduct,
    removeFavoriteProduct,
} from './actions-creators'

export const getFavoritesHandler: FavoriteHandler = (dispatch: React.Dispatch<FavoriteAction>) => ({
    addProduct: (product: IFavoriteProduct) => {
        dispatch(addFavoriteProduct(product));
    },
    removeProduct: (productId: string) => {
        dispatch(removeFavoriteProduct(productId));
    }
});