import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { ProdSizeAmount } from "./entities/prodsizeamount.entity";
import { Inject } from "@nestjs/common";
import { ProdsizeService } from "./prodsize.service";
import { Size } from "./entities/size.entity";
import { ProdcolorService } from "src/prodcolor/prodcolor.service";
import { ProdColor } from "src/prodcolor/entities/prodcolor.entity";


@Resolver(() => ProdSizeAmount)
export class ProdsizeResolver {
    constructor(
        @Inject(ProdsizeService) private prodsizeService: ProdsizeService,
        @Inject(ProdcolorService) private prodcolorService: ProdcolorService
    ) {}

    @ResolveField(returns => ProdColor)
    async prodcolor(@Parent() prodsize): Promise<ProdColor> {
        const { prod_color_id } = prodsize;
        return this.prodcolorService.findOne(prod_color_id)
    }

    @ResolveField(returns => Size)
    async size(@Parent() prodsize): Promise<Size> {
        const { size_id } = prodsize;
        return this.prodsizeService.findSize(size_id)
    }
}