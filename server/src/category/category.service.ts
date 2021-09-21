import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from './schemas/category.schema';

@Injectable()
export class CategoryService {

    constructor(@InjectModel(Category.name) private CategoryModel: Model<CategoryDocument>) { }

    async getAllCategory(): Promise<Category[]>{
        return this.CategoryModel.find().exec();
    }

    async getCategoryByCategory_Id(id: string): Promise<Category> {
        return this.CategoryModel.findOne({category_id : Number(id)}).exec();
    }
}
