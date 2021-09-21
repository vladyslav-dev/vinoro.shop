import { Controller, Get, Param } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './schemas/category.schema';

@Controller()
export class CategoryController {

    constructor(private readonly CategoryService: CategoryService) { }

    @Get()
    getAllCategory(): Promise<Category[]> {
        return this.CategoryService.getAllCategory();
    }

    @Get(":id")
    getCategoryByCategory_Id(@Param("id") id: string): Promise<Category> {
        return this.CategoryService.getCategoryByCategory_Id(id)
    }
}
