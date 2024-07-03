import { Field, ObjectType } from "@nestjs/graphql";
import mongoose, { Document } from "mongoose";

export const ProdSizeAmountSchema = new mongoose.Schema({
    prod_color_id: String,
    size_id: String,
    quantity: Number
})

@ObjectType()
export class ProdSizeAmount extends Document {
    @Field(() => String)
    _id: string;

    @Field(() => String)
    prod_color_id: string;

    @Field(() => String)
    size_id: string;

    @Field(() => Number)
    quantity: number;
}