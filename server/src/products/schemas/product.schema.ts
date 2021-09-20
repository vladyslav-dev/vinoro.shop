import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ProductDocument = Product & Document;

@Schema()
export class Product {

    @Prop()
    _id: string;

    @Prop()
    order_id: number;

    @Prop()
    category: number;

    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop()
    cost: number;

    @Prop()
    image: string;

    @Prop()
    availability: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product)