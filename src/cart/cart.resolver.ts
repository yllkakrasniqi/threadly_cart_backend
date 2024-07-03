import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { Inject } from "@nestjs/common";

import { UserCart } from "./entities/usercart.entity";
import { CartService } from "./cart.service";
import { AddCartInput } from "./dto/add-cart.input";

@Resolver(() => UserCart)
export class CartResolver {
    constructor(
        @Inject(CartService) private cartService: CartService
    ){}

    //Queries:


    //Mutation:
    @Mutation(() => UserCart, { nullable: true })
    addCart(@Args('addCartInput') addCartInput: AddCartInput) {
        return this.cartService.addCart(addCartInput)
    }
}