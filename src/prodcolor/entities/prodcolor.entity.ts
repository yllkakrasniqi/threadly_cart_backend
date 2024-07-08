import { Field, ObjectType } from "@nestjs/graphql";
import { Prop } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { ProdImage } from "src/favorite/entities/prodimage.entity";
import { Product } from "./product.entity";

export const ProdColorSchema = new mongoose.Schema({
    productID: mongoose.Schema.ObjectId,
    colorID: String,
})

@ObjectType()
export class ProdColor extends Document {
    @Prop({ type: mongoose.Schema.Types.ObjectId })
    @Field(() => String)
    _id: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId })
    @Field(() => String)
    productID: string;

    @Field(() => String)
    colorID: string;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ProdImage' }] })
    @Field(() => [ProdImage])
    prodimages: ProdImage[];
}