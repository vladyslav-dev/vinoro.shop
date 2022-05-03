import { setCurrentCategory } from '@/store/slices/catalog';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';

function useCurrentCategory(categoryId: string) {

    const dispatch = useDispatch();

    const { currentCategory, isLoaded } = useSelector((state: RootState) => state.catalogReducer);

    const updateCurrentCategory = (id: string): any => dispatch(setCurrentCategory(id));

    useEffect(() => {
        if (isLoaded && categoryId) {

           updateCurrentCategory(categoryId);
        }
        return () => updateCurrentCategory('');
    }, [isLoaded, categoryId])

    return {
            currentCategory,
            setCurrentCategory: updateCurrentCategory
        }
}

export default useCurrentCategory