import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class AddCartInput {
    @Field(() => String)
    userID: string;

    @Field(() => String)
    prod_size_id: string;
}