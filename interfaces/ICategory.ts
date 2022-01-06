export interface ICategory {
    _id: string;
    category_id: number;
    category_name: string;
    category_src: string;
    image: string;
    catalog: number;
};

export interface ICategoryState {
    category?: ICategory[];
    currentCategory?: string;
    isLoaded?: boolean;
}

export enum ACTION_TYPES {
    SET_CURRENT_CATEGORY = 'category/set-current-category',
    SET_CATEGORY_STATE = 'category/set-category-state',
}

interface ISetCurrentCategory {
    type: ACTION_TYPES.SET_CURRENT_CATEGORY;
    payload: string;
}

interface ISetCategoryState {
    type: ACTION_TYPES.SET_CATEGORY_STATE,
    payload: ICategory[]
}

export type CategoryAction = ISetCurrentCategory | ISetCategoryState

export interface CategoryHandlers {
    setCurrentCategory: (id: string) => void;
    setCategoryState: (category: ICategory[]) => void;
}

export type CategoryHandler = (dispatch: React.Dispatch<CategoryAction>) => CategoryHandlers