import { Document } from "mongoose";
export declare type CategoryDocument = Category & Document;
export declare class Category {
    _id: string;
    category_id: number;
    category_name: string;
    category_src: string;
    image: string;
    catalog: number;
}
export declare const CategorySchema: import("mongoose").Schema<Document<Category, any, any>, import("mongoose").Model<Document<Category, any, any>, any, any>, {}>;
