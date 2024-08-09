import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { ProdColor } from "./entities/prodcolor.entity";
import { Inject } from "@nestjs/common";
import { ProdcolorService } from "./prodcolor.service";
import { Product } from "./entities/product.entity";
import { Brand } from "./entities/brand.entity";
import { Color } from "./entities/color.entity";

@Resolver(() => ProdColor)
export class ProdcolorResolver {
    constructor(
        @Inject(ProdcolorService) private prodcolorService: ProdcolorService
    ) {}

    @ResolveField(returns => Product)
    async product(@Parent() prodcolor): Promise<Product> {
        const { productID } = prodcolor;
        return this.prodcolorService.findProduct(productID)
    }

    @ResolveField(returns => Brand)
    async brand(@Parent() prodcolor): Promise<Brand> {
        const { productID } = prodcolor;
        return this.prodcolorService.findBrand(productID)

    }

    @ResolveField(returns => Color)
    async color(@Parent() prodcolor): Promise<Color> {
        const { colorID } = prodcolor;
        return this.prodcolorService.findColor(colorID)
    }
}