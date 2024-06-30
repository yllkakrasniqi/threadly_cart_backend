import { Field, ObjectType } from "@nestjs/graphql";
import mongoose, { Document } from "mongoose";

export const UserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
})

@ObjectType()
export class User extends Document {
    @Field(() => String)
    _id: string;

    @Field(() => String, { description: 'Firstname' })
    firstname: string;
    
    @Field(() => String, { description: 'Lastname' })
    lastname: string;

    @Field(() => String, { description: 'E-mail' })
    email: string;
}