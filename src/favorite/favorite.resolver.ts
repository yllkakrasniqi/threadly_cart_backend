import { Args, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { UserFavorite } from "./entities/userfavorites.entity";
import { Inject } from "@nestjs/common";
import { FavoriteService } from "./favorite.service";
import { AddFavoriteInput } from "./dto/add-favorite.input";
import { User } from "src/user/entities/user.entity";
import { UserService } from "src/user/user.service";
import { ProdColor } from "./entities/prodcolor.entity";
import { ProdImage } from "./entities/prodimage.entity";

@Resolver(() => UserFavorite)
export class FavoriteResolver {
    constructor(
        @Inject(FavoriteService) private favoriteService: FavoriteService,
        @Inject(UserService) private userService: UserService
    ) {}

    //Queries:
    @Query(() => [UserFavorite], { name: 'favorites'})
    favorites(@Args('userID') userID: string){
        return this.favoriteService.findByUser(userID)
    }

    @Query(() => UserFavorite, { name: 'favorite', nullable: true })
    favorite(@Args('favoriteInput') favoiteInput: AddFavoriteInput ) {
        return this.favoriteService.findFavoriteProduct(favoiteInput)
    }

    @ResolveField(returns => User)
    async user(@Parent() favorite): Promise<User> {
        const { userID } = favorite;
        return this.userService.findOne(userID)
    }

    @ResolveField(returns => ProdColor)
    async prodcolor(@Parent() favorite): Promise<ProdColor> {
        const { prod_color_id } = favorite;
        return this.favoriteService.findProdColor(prod_color_id)
    }

    @ResolveField(returns => [ProdImage])
    async prodimages(@Parent() favorite): Promise<ProdImage[]> {
        const { prod_color_id } = favorite;
        return this.favoriteService.findProdImage(prod_color_id)
    }

    //Mutation
    @Mutation(() => UserFavorite)
    addFavorite(@Args('addFavoriteInput') addFavoriteInput: AddFavoriteInput ) {
        return this.favoriteService.addFavorite(addFavoriteInput)
    }

}