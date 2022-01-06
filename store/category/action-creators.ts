import { ICategory, CategoryAction, ACTION_TYPES } from '@/interfaces/ICategory';

export const setCurrentCategory = (payload: string): CategoryAction => ({type: ACTION_TYPES.SET_CURRENT_CATEGORY, payload})

export const setCategoryState = (payload: ICategory[]): CategoryAction => ({type: ACTION_TYPES.SET_CATEGORY_STATE, payload})