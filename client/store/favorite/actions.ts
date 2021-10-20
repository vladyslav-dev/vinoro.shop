import { IFavoriteProduct, FavoriteAction, FavoriteHandler } from '@/interfaces/IFavorite'
import {
    initState,
    addFavoriteProduct,
    removeFavoriteProduct,
} from './actions-creators'

export const getFavoritesHandler: FavoriteHandler = (dispatch: React.Dispatch<FavoriteAction>) => ({
    initState: (product: Array<IFavoriteProduct>) => {
        dispatch(initState(product))
    },
    addProduct: (product: IFavoriteProduct) => {
        dispatch(addFavoriteProduct(product));
    },
    removeProduct: (productId: string) => {
        dispatch(removeFavoriteProduct(productId));
    }
});