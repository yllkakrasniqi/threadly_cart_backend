import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { ProdColor } from "./entities/prodcolor.entity";
import { Product } from "./entities/product.entity";
import { Brand } from "./entities/brand.entity";
import { Color } from "./entities/color.entity";

@Injectable()
export class ProdcolorService {
    constructor (
        @Inject('PRODCOLOR_MODEL') private prodColorModel: Model<ProdColor>,
        @Inject('PRODUCT_MODEL') private productModel: Model<Product>,
        @Inject('BRAND_MODEL') private brandModel: Model<Brand>,
        @Inject('COLOR_MODEL') private colorModel: Model<Color>
    ) {}

    findOne(id: string): Promise<ProdColor> {
        return this.prodColorModel.findById(id).lean()
    }

    findProduct(productID: string): Promise<Product> {
        return this.productModel.findById(productID).lean()
    }

    async findBrand(productID: string): Promise<Brand> {
        const product = await this.productModel.findById(productID)
        return this.brandModel.findById(product.brandID).lean()
    }

    async findColor(colorID: string): Promise<Color> {
        return this.colorModel.findOne({_id: colorID}).lean()
    }
}