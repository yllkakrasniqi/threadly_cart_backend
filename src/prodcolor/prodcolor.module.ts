import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { ProdcolorService } from "./prodcolor.service";
import { ProdcolorResolver } from "./prodcolor.resolver";
import { prodcolorProviders } from "./prodcolor.providers";

@Module({
    imports: [DatabaseModule],
    providers: [
        ProdcolorService,
        ProdcolorResolver,
        ...prodcolorProviders
    ]
})
export class ProdcolorModule {}