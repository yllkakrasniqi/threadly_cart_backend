import { Field, ObjectType } from "@nestjs/graphql";
import { Prop } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { User } from "src/user/entities/user.entity";
import { ProdColor } from "./prodcolor.entity";
import { ProdImage } from "./prodimage.entity";

export const UserFavoriteSchema = new mongoose.Schema({
    userID: mongoose.Schema.ObjectId,
    prod_color_id: mongoose.Schema.ObjectId,
    check: Boolean
})

@ObjectType()
export class UserFavorite extends Document {
    @Prop({ type: mongoose.Schema.Types.ObjectId })
    @Field(() => String)
    _id: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId })
    @Field(() => String)
    userID: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId })
    @Field(() => String)
    prod_color_id: string;

    @Field(() => Boolean)
    check: boolean;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    @Field(() => User)
    user: User;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'ProdColor' })
    @Field(() => ProdColor)
    prodcolor: ProdColor;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ProdImage' }] })
    @Field(() => [ProdImage])
    prodimages: ProdImage[];
}