import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { User } from "./entities/user.entity";
import { Inject, Param } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserFavorite } from "src/favorite/entities/userfavorites.entity";
import { FavoriteService } from "src/favorite/favorite.service";

@Resolver(() => User)
export class UserResolver {
    constructor(
        @Inject(UserService) private userService: UserService,
        @Inject(FavoriteService) private favoriteService: FavoriteService
    ) {}

    //Queries:
    @Query(() => User, { name: 'user' })
    user(@Args('id', { type: () => String }) id: string) {
        return this.userService.findOne(id)
    }

    @ResolveField(returns => [UserFavorite]) 
    async favorites(@Parent() user): Promise<UserFavorite[]>{
        const { _id } = user;
        return this.favoriteService.findByUser(_id)
    }
}