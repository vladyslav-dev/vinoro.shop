import { ICatalogCollection, ICatalogDictionary } from "@/interfaces/catalog";
import { ICategory } from "@/interfaces/category";

export const toCatalogCollection = (dictionaryCatalog: ICatalogDictionary, categoryList: ICategory[]): ICatalogCollection  => (
    categoryList.reduce((acc: ICatalogCollection, category: ICategory) => {
        acc[category.catalog] = {
            catalog: dictionaryCatalog[category.catalog],
            category: acc[category?.catalog] ? [...acc[category.catalog]['category'], category] : [category]
        };
        return acc;
    }, {})
)