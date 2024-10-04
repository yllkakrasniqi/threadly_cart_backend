import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { ProdSizeAmount } from "./entities/prodsizeamount.entity";
import { Size } from "./entities/size.entity";

@Injectable()
export class ProdsizeService {
    constructor(
        @Inject('PRODSIZEAMOUNT_MODEL') private prodSizeAmountModel: Model<ProdSizeAmount>,
        @Inject('SIZE_MODEL') private sizeModel: Model<Size>,
    ){}

    async findOne(id: string): Promise<ProdSizeAmount> {
        return this.prodSizeAmountModel.findById(id).lean()
    }

    async findSize(id: string): Promise<Size> {
        return this.sizeModel.findById(id).lean()
    }
}