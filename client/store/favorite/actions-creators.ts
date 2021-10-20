import {
    FavoriteAction,
    IFavoriteProduct,
    ACTION_TYPES
} from '@/interfaces/IFavorite'

export const addFavoriteProduct = (payload: IFavoriteProduct) :FavoriteAction => ({ type: ACTION_TYPES.ADD_PRODUCT, payload });

export const removeFavoriteProduct = (payload: string) :FavoriteAction => ({ type: ACTION_TYPES.REMOVE_PRODUCT, payload });

