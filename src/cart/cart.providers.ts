import { Connection } from "mongoose";
import { UserCartSchema } from "./entities/usercart.entity";

export const cartProviders = [
    {
        provide: 'CART_MODEL',
        useFactory: (connection: Connection) =>
            connection.model('UserCart', UserCartSchema),
        inject: ['DATABASE_CONNECTION'],
    }
]