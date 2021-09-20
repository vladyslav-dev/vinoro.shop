import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CategoryDocument = Category & Document;

@Schema()
export class Category {

    @Prop()
    _id: string

    @Prop()
    category_id: number;

    @Prop()
    category_name: string;

    @Prop()
    category_src: string;

    @Prop()
    image: string;

    @Prop()
    catalog: number;

}

export const CategorySchema = SchemaFactory.createForClass(Category)

