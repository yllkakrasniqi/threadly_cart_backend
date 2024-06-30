import { Args, Query, Resolver } from "@nestjs/graphql";
import { User } from "./entities/user.entity";
import { Inject } from "@nestjs/common";
import { UserService } from "./user.service";

@Resolver(() => User)
export class UserResolver {
    constructor(
        @Inject(UserService) private userService: UserService
    ) {}

    //Queries:
    @Query(() => User, { name: 'user' })
    user(@Args('id', { type: () => String }) id: string) {
        return this.userService.findOne(id)
    }
}