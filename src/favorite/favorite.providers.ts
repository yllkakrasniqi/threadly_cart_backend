import { Connection } from "mongoose";
import { UserFavoriteSchema } from "./entities/userfavorites.entity";

export const favoriteProviders = [
    {
        provide: 'FAVORITE_MODEL',
        useFactory: (connection: Connection) =>
            connection.model('UserFavorite', UserFavoriteSchema),
        inject: ['DATABASE_CONNECTION'],
    }
]