import { Args, Context, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { UserFavorite } from "./entities/userfavorites.entity";
import { Inject, UseGuards } from "@nestjs/common";
import { FavoriteService } from "./favorite.service";
import { User } from "src/user/entities/user.entity";
import { UserService } from "src/user/user.service";
import { ProdImage } from "./entities/prodimage.entity";
import { ProdColor } from "src/prodcolor/entities/prodcolor.entity";
import { ProdcolorService } from "src/prodcolor/prodcolor.service";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@Resolver(() => UserFavorite)
export class FavoriteResolver {
    constructor(
        @Inject(FavoriteService) private favoriteService: FavoriteService,
        @Inject(UserService) private userService: UserService,
        @Inject(ProdcolorService) private prodcolorService: ProdcolorService
    ) {}

    //Queries:
    @UseGuards(JwtAuthGuard)
    @Query(() => [UserFavorite], { name: 'favorites'})
    favorites(@Context() context: any){
        const user = context.req.user
        return this.favoriteService.findByUser(user.id)
    }

    @UseGuards(JwtAuthGuard)
    @Query(() => UserFavorite, { name: 'favorite', nullable: true })
    favorite(@Args('prod_color_id') prod_color_id: string, @Context() context: any ) {
        const user = context.req.user
        return this.favoriteService.findFavoriteProduct(user.id, prod_color_id)
    }

    @ResolveField(returns => User)
    async user(@Parent() favorite): Promise<User> {
        const { userID } = favorite;
        return this.userService.findOne(userID)
    }

    @ResolveField(returns => ProdColor)
    async prodcolor(@Parent() favorite): Promise<ProdColor> {
        const { prod_color_id } = favorite;
        return this.prodcolorService.findOne(prod_color_id)
    }

    @ResolveField(returns => [ProdImage])
    async prodimages(@Parent() favorite): Promise<ProdImage[]> {
        const { prod_color_id } = favorite;
        return this.favoriteService.findProdImage(prod_color_id)
    }

    //Mutation
    @UseGuards(JwtAuthGuard)
    @Mutation(() => UserFavorite)
    addFavorite(@Args('prod_color_id') prod_color_id: string, @Context() context: any) {
        const user = context.req.user
        return this.favoriteService.addFavorite(user.id, prod_color_id)
    }

}