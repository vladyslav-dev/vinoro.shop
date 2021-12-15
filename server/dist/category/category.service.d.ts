import { Model } from 'mongoose';
import { Category, CategoryDocument } from './schemas/category.schema';
export declare class CategoryService {
    private CategoryModel;
    constructor(CategoryModel: Model<CategoryDocument>);
    getAllCategory(): Promise<Category[]>;
    getCategoryByCategory_Id(id: string): Promise<Category>;
}
