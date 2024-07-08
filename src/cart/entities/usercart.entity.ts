import { Field, ObjectType } from "@nestjs/graphql";
import { Prop } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";

export const UserCartSchema = new mongoose.Schema({
    userID: mongoose.Schema.ObjectId,
    prod_size_id: mongoose.Schema.ObjectId,
    quantity: Number
})

@ObjectType()
export class UserCart extends Document {
    @Prop({ type: mongoose.Schema.Types.ObjectId })
    @Field(() => String)
    _id: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId })
    @Field(() => String)
    userID: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId })
    @Field(() => String)
    prod_size_id: string;

    @Field(() => Number)
    quantity: number;
}