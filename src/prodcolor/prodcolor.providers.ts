import { Connection } from "mongoose";
import { ProdColorSchema } from "./entities/prodcolor.entity";
import { ProductSchema } from "./entities/product.entity";
import { BrandSchema } from "./entities/brand.entity";

export const prodcolorProviders = [
    {
        provide: 'PRODCOLOR_MODEL',
        useFactory: (connection: Connection) =>
            connection.model('ProdColor', ProdColorSchema),
        inject: ['DATABASE_CONNECTION'],
    },
    {
        provide: 'PRODUCT_MODEL',
        useFactory: (connection: Connection) =>
            connection.model('Product', ProductSchema),
        inject: ['DATABASE_CONNECTION'],
    },
    {
        provide: 'BRAND_MODEL',
        useFactory: (connection: Connection) =>
            connection.model('Brand', BrandSchema),
        inject: ['DATABASE_CONNECTION'],
    }
]