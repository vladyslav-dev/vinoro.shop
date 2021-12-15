import { Document } from "mongoose";
export declare type ProductDocument = Product & Document;
export declare class Product {
    _id: string;
    order_id: number;
    category: number;
    name: string;
    description: string;
    cost: number;
    image: string;
    availability: boolean;
}
export declare const ProductSchema: import("mongoose").Schema<Document<Product, any, any>, import("mongoose").Model<Document<Product, any, any>, any, any>, {}>;
