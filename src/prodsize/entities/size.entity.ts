import { Field, ObjectType } from "@nestjs/graphql";
import { Prop } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";

export const SizeSchema = new mongoose.Schema({
    name: String,
    description: String,
    standard: String
})

@ObjectType()
export class Size extends Document {
    @Prop({ type: mongoose.Schema.Types.ObjectId })
    @Field(() => String)
    _id: string;

    @Field(() => String)
    name: string;
    
    @Field(() => String)
    description: string;
    
    @Field(() => String)
    standard: string;
}