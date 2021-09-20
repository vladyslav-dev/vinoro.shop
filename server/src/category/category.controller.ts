import { Controller, Get, Param, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './schemas/category.schema';

@Controller('category')
export class CategoryController {

    constructor(private readonly CategoryService: CategoryService) { }

    @Get()
    getAllCategory(): Promise<Category[]> {
        return this.CategoryService.getAllCategory();
    }
}
