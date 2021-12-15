import { Model } from 'mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
export declare class ProductsService {
    private ProductModel;
    constructor(ProductModel: Model<ProductDocument>);
    getAllProducts(): Promise<Product[]>;
    getProductByCategory(id: string): Promise<Product[]>;
    getProductById(id: string): Promise<Product>;
}
