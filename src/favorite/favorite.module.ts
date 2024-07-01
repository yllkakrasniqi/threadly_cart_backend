import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { favoriteProviders } from "./favorite.providers";
import { FavoriteService } from "./favorite.service";
import { FavoriteResolver } from "./favorite.resolver";

@Module({
    imports: [DatabaseModule],
    providers: [
        FavoriteService,
        FavoriteResolver,
        ...favoriteProviders,
    ]
})
export class FavoriteModule {}