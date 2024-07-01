import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class AddFavoriteInput {
    @Field(() => String)
    userID: string;

    @Field(() => String)
    prod_color_id: string;
}