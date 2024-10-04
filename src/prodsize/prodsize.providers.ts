import { Connection } from "mongoose";
import { ProdSizeAmountSchema } from "./entities/prodsizeamount.entity";
import { SizeSchema } from "./entities/size.entity";

export const prodsizeProviders = [
    {
        provide: 'PRODSIZEAMOUNT_MODEL',
        useFactory: (connection: Connection) =>
            connection.model('ProdSizeAmount', ProdSizeAmountSchema),
        inject: ['DATABASE_CONNECTION'],
    },
    {
        provide: 'SIZE_MODEL',
        useFactory: (connection: Connection) =>
            connection.model('Size', SizeSchema),
        inject: ['DATABASE_CONNECTION'],
    },
]