import { useEffect, useContext } from 'react';
import { GlobalContext } from '@/store/index';

function useCurrentCategory(categoryId: string) {
    const { CATEGORY } = useContext(GlobalContext);
    const { state, handlers } = CATEGORY;
    const { isLoaded } = state;

    const updateCurrentCategory = (id: string): void => handlers.setCurrentCategory(id)
    
    useEffect(() => {
        if (isLoaded && categoryId) {
           updateCurrentCategory(categoryId);
        }
        return () =>  updateCurrentCategory("");
    }, [isLoaded, categoryId])

    return {
            currentCategory: state.currentCategory,
            setCurrentCategory: updateCurrentCategory
        }
}

export default useCurrentCategory