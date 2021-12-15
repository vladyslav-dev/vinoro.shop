import { ProductsService } from './products.service';
import { Product } from './schemas/product.schema';
export declare class ProductsController {
    private readonly ProductsService;
    constructor(ProductsService: ProductsService);
    getAllProducts(): Promise<Product[]>;
    getProductById(id: string): Promise<Product>;
    getProductByCategory(id: string): Promise<Product[]>;
}
