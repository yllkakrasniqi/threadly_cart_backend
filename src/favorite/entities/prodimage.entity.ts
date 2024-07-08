import { Field, ObjectType } from "@nestjs/graphql";
import { Prop } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";

export const ProdImageSchema = new mongoose.Schema({
    filename: String,
    path: String,
    prod_color_id: mongoose.Schema.ObjectId,
})

@ObjectType()
export class ProdImage extends Document {
    @Prop({ type: mongoose.Schema.Types.ObjectId })
    @Field(() => String)
    _id: string;

    @Field(() => String)
    filename: string;

    @Field(() => String)
    path: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId })
    @Field(() => String)
    prod_color_id: mongoose.Types.ObjectId;

    // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'ProdColor' })
    // @Field(() => ProdColor)
    // prodcolor: ProdColor;
}