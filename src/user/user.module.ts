import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { userProviders } from "./user.providers";
import { UserResolver } from "./user.resolver";
import { UserService } from "./user.service";
import { FavoriteService } from "src/favorite/favorite.service";
import { favoriteProviders } from "src/favorite/favorite.providers";

@Module({
    imports: [DatabaseModule],
    providers: [
        UserResolver,
        UserService,
        ...userProviders,
        FavoriteService,
        ...favoriteProviders,
    ]
})
export class UserModule {}