import { CategoryService } from './category.service';
import { Category } from './schemas/category.schema';
export declare class CategoryController {
    private readonly CategoryService;
    constructor(CategoryService: CategoryService);
    getAllCategory(): Promise<Category[]>;
    getCategoryByCategory_Id(id: string): Promise<Category>;
}
