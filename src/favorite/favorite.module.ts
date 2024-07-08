import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { favoriteProviders } from "./favorite.providers";
import { FavoriteService } from "./favorite.service";
import { FavoriteResolver } from "./favorite.resolver";
import { UserService } from "src/user/user.service";
import { userProviders } from "src/user/user.providers";
import { prodcolorProviders } from "src/prodcolor/prodcolor.providers";
import { ProdcolorService } from "src/prodcolor/prodcolor.service";

@Module({
    imports: [DatabaseModule],
    providers: [
        FavoriteService,
        FavoriteResolver,
        ...favoriteProviders,
        UserService,
        ...userProviders,
        ProdcolorService,
        ...prodcolorProviders
        
    ]
})
export class FavoriteModule {}