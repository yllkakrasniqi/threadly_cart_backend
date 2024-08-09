import { Args, Context, Mutation, Resolver } from "@nestjs/graphql";
import { Inject, UseGuards } from "@nestjs/common";

import { UserCart } from "./entities/usercart.entity";
import { CartService } from "./cart.service";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@Resolver(() => UserCart)
export class CartResolver {
    constructor(
        @Inject(CartService) private cartService: CartService
    ){}

    //Queries:

    //Mutation:
    @UseGuards(JwtAuthGuard)
    @Mutation(() => UserCart, { nullable: true })
    // addCart(@Args('addCartInput') addCartInput: AddCartInput) {
    addCart(@Args('prod_size_id') prod_size_id: string, @Context() context: any) {
        const user = context.req.user
        return this.cartService.addCart(user.id, prod_size_id)
    }
}