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

export const collectCategory = (category: ICategory[], catalogEnum: any): any => {
    const res = Object.values(catalogEnum).reduce((acc: CategoryCollection[], item) => {
        if (typeof item === 'number') {
           acc.push({
               title: catalogEnum[item],
               data: category.filter(categor => categor.catalog === item),
           })
        }
        return acc
    }, [])

    console.log(res)

    return res
}