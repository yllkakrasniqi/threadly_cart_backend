import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserFavorite } from "./entities/userfavorites.entity";
import { Inject } from "@nestjs/common";
import { FavoriteService } from "./favorite.service";
import { AddFavoriteInput } from "./dto/add-favorite.input";

@Resolver(() => UserFavorite)
export class FavoriteResolver {
    constructor(
        @Inject(FavoriteService) private favoriteService: FavoriteService
    ) {}

    @Mutation(() => UserFavorite)
    addFavorite(@Args('addFavoriteInput') addFavoriteInput: AddFavoriteInput ) {
        return this.favoriteService.addFavorite(addFavoriteInput)
    }

}