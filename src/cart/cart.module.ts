import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { cartProviders } from "./cart.providers";
import { CartService } from "./cart.service";
import { CartResolver } from "./cart.resolver";
import { ProdsizeService } from "src/prodsize/prodsize.service";
import { prodsizeProviders } from "src/prodsize/prodsize.providers";

@Module({
    imports: [DatabaseModule],
    providers: [
        CartService,
        CartResolver,
        ...cartProviders,
        ProdsizeService,
        ...prodsizeProviders
    ]
})
export class CartModule {}