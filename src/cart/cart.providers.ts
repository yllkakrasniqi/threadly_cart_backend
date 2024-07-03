import { Connection } from "mongoose";
import { UserCartSchema } from "./entities/usercart.entity";
import { ProdSizeAmountSchema } from "./entities/prodsizeamount.entity";

export const cartProviders = [
    {
        provide: 'CART_MODEL',
        useFactory: (connection: Connection) =>
            connection.model('UserCart', UserCartSchema),
        inject: ['DATABASE_CONNECTION'],
    },
    {
        provide: 'PRODSIZEAMOUNT_MODEL',
        useFactory: (connection: Connection) =>
            connection.model('ProdSizeAmount', ProdSizeAmountSchema),
        inject: ['DATABASE_CONNECTION'],
    }
]