import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { ProdColor } from "./entities/prodcolor.entity";
import { Product } from "./entities/product.entity";
import { Brand } from "./entities/brand.entity";

@Injectable()
export class ProdcolorService {
    constructor (
        @Inject('PRODCOLOR_MODEL') private prodColorModel: Model<ProdColor>,
        @Inject('PRODUCT_MODEL') private productModel: Model<Product>,
        @Inject('BRAND_MODEL') private brandModel: Model<Brand>
    ) {}

    findOne(id: string): Promise<ProdColor> {
        return this.prodColorModel.findById(id)
    }

    findProduct(productID: string): Promise<Product> {
        return this.productModel.findById(productID).lean()
    }

    async findBrand(productID: string): Promise<Brand> {
        const product = await this.productModel.findById(productID)
        return this.brandModel.findById(product.brandID)
    }
}