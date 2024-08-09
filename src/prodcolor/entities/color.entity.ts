import { Field, ObjectType } from "@nestjs/graphql";
import mongoose, { Document } from "mongoose";

export const ColorSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    colorStr: String,
})

@ObjectType()
export class Color extends Document {
    @Field(() => String)
    _id: string;

    @Field(() => String)
    colorStr: string;
    
}