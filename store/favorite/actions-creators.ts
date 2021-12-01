import {
    FavoriteAction,
    IProductCard,
    ACTION_TYPES
} from '@/interfaces/IFavorite'

export const initState = (payload: Array<IProductCard>) :FavoriteAction => ({type: ACTION_TYPES.INIT_STATE, payload})

export const addFavoriteProduct = (payload: IProductCard) :FavoriteAction => ({ type: ACTION_TYPES.ADD_PRODUCT, payload });

export const removeFavoriteProduct = (payload: string) :FavoriteAction => ({ type: ACTION_TYPES.REMOVE_PRODUCT, payload });

