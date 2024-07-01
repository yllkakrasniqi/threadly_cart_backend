import { Field, ObjectType } from "@nestjs/graphql";
import { Prop } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { User } from "src/user/entities/user.entity";

export const UserFavoriteSchema = new mongoose.Schema({
    userID: String,
    prod_color_id: String,
    check: Boolean
})

@ObjectType()
export class UserFavorite extends Document {
    @Field(() => String)
    _id: string;

    @Field(() => String)
    userID: string;

    @Field(() => String)
    prod_color_id: string;

    @Field(() => Boolean)
    check: boolean;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    @Field(type => User)
    user: User;
}