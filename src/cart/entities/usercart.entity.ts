import { Field, ObjectType } from "@nestjs/graphql";
import mongoose, { Document } from "mongoose";

export const UserCartSchema = new mongoose.Schema({
    userID: String,
    prod_size_id: String,
    quantity: Number
})

@ObjectType()
export class UserCart extends Document {
    @Field(() => String)
    _id: string;

    @Field(() => String)
    userID: string;

    @Field(() => String)
    prod_size_id: string;

    @Field(() => Number)
    quantity: number;
}