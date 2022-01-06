import { ICategory, CategoryHandler, CategoryAction } from '@/interfaces/ICategory';
import { setCurrentCategory, setCategoryState } from './action-creators';


export const getCategoryHandlers: CategoryHandler = (dispatch: React.Dispatch<CategoryAction>) => ({
    setCurrentCategory: (id: string) => {
        dispatch(setCurrentCategory(id));
    },
    setCategoryState: (category: ICategory[]) => {
        dispatch(setCategoryState(category));
    }
});