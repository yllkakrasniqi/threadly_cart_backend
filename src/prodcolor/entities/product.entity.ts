import { Field, ObjectType } from "@nestjs/graphql";
import { Prop } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { Brand } from "./brand.entity";

export const ProductSchema = new mongoose.Schema({
    brandID: mongoose.Schema.ObjectId,
    name: String,
    type: String,
    price: Number,
    gender: {
        type: String,
        maxlength: 1,
    },
    status: {
        type: Number,
        maxlength: 1,
    },
})

@ObjectType()
export class Product extends Document {
    @Prop({ type: mongoose.Schema.Types.ObjectId })
    @Field(() => String)
    _id: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId })
    @Field(() => String)
    brandID: string;

    @Field(() => String)
    name: string;

    @Field(() => String)
    type: string;

    @Field(() => Number)
    price: number;

    @Field(() => Number)
    status: number;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Brand' })
    @Field(() => Brand)
    prodcolor: Brand;
}