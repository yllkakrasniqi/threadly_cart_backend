import { Field, ObjectType } from "@nestjs/graphql";
import { Prop } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";

export const BrandSchema = new mongoose.Schema({
    name: String,
})

@ObjectType()
export class Brand extends Document {
    @Prop({ type: mongoose.Schema.Types.ObjectId })
    @Field(() => String)
    _id: string;

    @Field(() => String)
    name: string;
    
}