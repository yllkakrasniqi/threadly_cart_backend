import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { cartProviders } from "./cart.providers";
import { CartService } from "./cart.service";
import { CartResolver } from "./cart.resolver";

@Module({
    imports: [DatabaseModule],
    providers: [
        CartService,
        CartResolver,
        ...cartProviders
    ]
})
export class CartModule {}