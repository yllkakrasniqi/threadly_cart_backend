import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { prodsizeProviders } from "./prodsize.providers";
import { ProdsizeService } from "./prodsize.service";
import { ProdsizeResolver } from "./prodsize.resolver";
import { ProdcolorService } from "src/prodcolor/prodcolor.service";
import { prodcolorProviders } from "src/prodcolor/prodcolor.providers";

@Module({
    imports: [DatabaseModule],
    providers: [
        ProdsizeService,
        ProdsizeResolver,
        ...prodsizeProviders,
        ProdcolorService,
        ...prodcolorProviders
    ]
})
export class ProdsizeModule {}