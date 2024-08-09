import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { User } from "./entities/user.entity";
import { Inject, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserFavorite } from "src/favorite/entities/userfavorites.entity";
import { FavoriteService } from "src/favorite/favorite.service";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@Resolver(() => User)
export class UserResolver {
    constructor(
        @Inject(UserService) private userService: UserService,
        @Inject(FavoriteService) private favoriteService: FavoriteService
    ) {}

    //Queries:
    @Query(() => User, { name: 'user' })
    user(@Args('id', { type: () => String }) id: string): Promise<User> {
        return this.userService.findOne(id)
    }

    @ResolveField(returns => [UserFavorite]) 
    async favorites(@Parent() user): Promise<UserFavorite[]>{
        const { _id } = user;
        return this.favoriteService.findByUser(_id)
    }

    @UseGuards(JwtAuthGuard)
    @Query(() => [User], { name: 'users' })
    users(){
        return this.userService.getUsers()
    }
}