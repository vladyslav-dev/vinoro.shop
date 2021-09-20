import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './schemas/product.schema';

@Injectable()
export class ProductsService {

    constructor(@InjectModel(Product.name) private ProductModel: Model<ProductDocument>) { }

    async getAllProducts(): Promise<Product[]> {
        return this.ProductModel.find().exec();
    }

    async getProductByCategory(id: string): Promise<Product[]> {
        return this.ProductModel.find({ category: Number(id) }).exec();
    }

    async getProductById(id: string): Promise<Product> {
        return this.ProductModel.findById(id).exec();
    }
}
