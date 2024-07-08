import { Field, ObjectType } from "@nestjs/graphql";
import { Prop } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { UserFavorite } from "src/favorite/entities/userfavorites.entity";

export const UserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
})

@ObjectType()
export class User extends Document {
    @Prop({ type: mongoose.Schema.Types.ObjectId })
    @Field(() => String)
    _id: string;

    @Field(() => String, { description: 'Firstname' })
    firstname: string;
    
    @Field(() => String, { description: 'Lastname' })
    lastname: string;

    @Field(() => String, { description: 'E-mail' })
    email: string;
    
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'UserFavorite' }] })
    @Field(type => [UserFavorite])
    favorites: UserFavorite[]

}