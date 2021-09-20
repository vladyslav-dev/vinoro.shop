import { Controller, Get, Param, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './schemas/product.schema'

@Controller('products')
export class ProductsController {

    constructor(private readonly ProductsService: ProductsService) { }

    @Get()
    getAllProducts(): Promise<Product[]> {
        this.ProductsService.getAllProducts().then(res => console.log(res))
        return this.ProductsService.getAllProducts();
    }

    @Get(":id")
    getProductById(@Param("id") id: string): Promise<Product> {
        return this.ProductsService.getProductById(id)
    }

    @Get("/category/:id")
    getProductByCategory(@Param("id") id: string): Promise<Product[]> {
        return this.ProductsService.getProductByCategory(id)
    }

}
