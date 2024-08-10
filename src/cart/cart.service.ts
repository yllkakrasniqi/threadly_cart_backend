import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { UserCart } from "./entities/usercart.entity";
import { ProdSizeAmount } from "./entities/prodsizeamount.entity";
import { Equal, MoreThan } from 'typeorm'
import { Op } from 'sequelize'

@Injectable()
export class CartService {
    constructor(
        @Inject('CART_MODEL') private cartModel: Model<UserCart>,
        @Inject('PRODSIZEAMOUNT_MODEL') private prodSizeAmount: Model<ProdSizeAmount>
    ) {}

    findAll(): Promise<UserCart[]> {
        return this.cartModel.find().exec()
    }

    findByUser(userID: string): Promise<UserCart[]> {
        return this.cartModel.find({
            userID: userID,
            quantity: { $gte: 1 }
        }).exec();
    }

    async addCart(userId: string, prod_size_id: string): Promise<UserCart | null> {
        let prodSizeAmount = await this.prodSizeAmount.findById(prod_size_id)
        let userCarts = await this.cartModel.find({prod_size_id: prod_size_id})
        
        const totalQuantity: number = userCarts.reduce((sum, item) => sum + item.quantity, 0);
        if ( prodSizeAmount.quantity - totalQuantity === 0 ) {
            return null
        }

        const userCart = userCarts.find( ele => ele.userID === userId)
        if (userCart) {
            return this.cartModel.findByIdAndUpdate(userCart._id, {
                quantity: userCart.quantity + 1
            })
        }

        return this.cartModel.create({
            userID: userId,
            prod_size_id: prod_size_id,
            quantity: 1
        })
    }
}