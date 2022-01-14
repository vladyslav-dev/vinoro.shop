import { Catalog as CatalogEnum } from '@/enums/Catalog';
import { ICategory, CategoryCollection } from '@/interfaces/ICategory';

type RangeType = 'lg' | 'md' | 'sm';

export const getCurrentRange = (range: RangeType) => {
    switch (range) {
        case "lg":
            return {
                gridTemplateColumns: `repeat(4, 1fr)`
            }
        case "md":
            return {
                gridTemplateColumns: `repeat(5, 1fr)`
            }
        case "sm":
            return {
                gridTemplateColumns: `repeat(6, 1fr)`
            }
    }
}

export const collectCategory = (category: ICategory[]): CategoryCollection[] => {
    return Object.values(CatalogEnum).reduce((acc, item) => {
        if (typeof item === 'number') {
           acc.push({
               title: CatalogEnum[item],
               data: category.filter(categor => categor.catalog === item),
           })
        }
        return acc
    
    }, [])
}