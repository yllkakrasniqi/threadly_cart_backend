import { Connection } from "mongoose";
import { UserFavoriteSchema } from "./entities/userfavorites.entity";
import { ProdColorSchema } from "./entities/prodcolor.entity";
import { ProdImageSchema } from "./entities/prodimage.entity";

export const favoriteProviders = [
    {
        provide: 'FAVORITE_MODEL',
        useFactory: (connection: Connection) =>
            connection.model('UserFavorite', UserFavoriteSchema),
        inject: ['DATABASE_CONNECTION'],
    },
    {
        provide: 'PRODCOLOR_MODEL',
        useFactory: (connection: Connection) =>
            connection.model('ProdColor', ProdColorSchema),
        inject: ['DATABASE_CONNECTION'],
    },
    {
        provide: 'PRODIMAGE_MODEL',
        useFactory: (connection: Connection) =>
            connection.model('ProdImage', ProdImageSchema),
        inject: ['DATABASE_CONNECTION'],
    },
]