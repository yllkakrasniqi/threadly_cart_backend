import { Field, ObjectType } from "@nestjs/graphql";
import { Prop } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";

export const ProdSizeAmountSchema = new mongoose.Schema({
    prod_color_id: mongoose.Schema.ObjectId,
    size_id: mongoose.Schema.ObjectId,
    quantity: Number
})

@ObjectType()
export class ProdSizeAmount extends Document {
    @Prop({ type: mongoose.Schema.Types.ObjectId })
    @Field(() => String)
    _id: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId })
    @Field(() => String)
    prod_color_id: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId })
    @Field(() => String)
    size_id: string;

    @Field(() => Number)
    quantity: number;
}