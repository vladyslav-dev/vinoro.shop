import { IProductCard, FavoriteAction, FavoriteHandler } from '@/interfaces/IFavorite'
import {
    initState,
    addFavoriteProduct,
    removeFavoriteProduct,
} from './actions-creators'

export const getFavoritesHandler: FavoriteHandler = (dispatch: React.Dispatch<FavoriteAction>) => ({
    initState: (product: Array<IProductCard>) => {
        dispatch(initState(product))
    },
    addProduct: (product: IProductCard) => {
        dispatch(addFavoriteProduct(product));
    },
    removeProduct: (productId: string) => {
        dispatch(removeFavoriteProduct(productId));
    }
});