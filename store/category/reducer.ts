import { ICategoryState, CategoryAction, ACTION_TYPES } from '@/interfaces/ICategory';

export const categoryInitialState: ICategoryState = {
    category: [],
    currentCategory: "",
    isLoaded: false,
};

export const categoryReducer = (state: ICategoryState, action: CategoryAction): ICategoryState => {
    switch (action.type) {
        case ACTION_TYPES.SET_CATEGORY_STATE: 
            return {
                ...state,
                category: action.payload,
                isLoaded: true,
            }
        case ACTION_TYPES.SET_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: state.category.find(i => i._id === action.payload)?._id
            };
        default:
            return state;
    }
};

