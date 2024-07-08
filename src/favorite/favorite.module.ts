import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { favoriteProviders } from "./favorite.providers";
import { FavoriteService } from "./favorite.service";
import { FavoriteResolver } from "./favorite.resolver";
import { UserService } from "src/user/user.service";
import { userProviders } from "src/user/user.providers";
@Module({
    imports: [DatabaseModule],
    providers: [
        FavoriteService,
        FavoriteResolver,
        ...favoriteProviders,
        UserService,
        ...userProviders,
    ]
})
export class FavoriteModule {}