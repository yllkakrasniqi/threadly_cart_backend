import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { UserFavorite } from "./entities/userfavorites.entity";
import { ProdImage } from "./entities/prodimage.entity";

@Injectable() 
export class FavoriteService {
    constructor(
        @Inject('FAVORITE_MODEL') private favoriteModel: Model<UserFavorite>,
        @Inject('PRODIMAGE_MODEL') private prodImageModel: Model<ProdImage>,
    ) {}

    findByUser(userID: string): Promise<UserFavorite[]> {
        return this.favoriteModel.find({userID: userID, check: true}).lean()
    }

    async findFavoriteProduct(userID: string, prod_color_id: string): Promise<UserFavorite | null> {
        const favoriteProduct = await this.favoriteModel.findOne({
            userID: userID,
            prod_color_id: prod_color_id
        }).lean()
        if(!favoriteProduct){
            return null
        }
        return favoriteProduct
    }
    
    async addFavorite(userID: string, prod_color_id: string) {
        let prevUserFavorite = await this.favoriteModel.findOne({
            userID: userID,
            prod_color_id: prod_color_id
        })
        if(prevUserFavorite) {
            return this.favoriteModel.findByIdAndUpdate(prevUserFavorite._id, {
                check: !prevUserFavorite.check
            })
        } else {
            return this.favoriteModel.create({
                userID: userID,
                prod_color_id: prod_color_id,
                check: true
            })
        }
    }

    async findProdImage(prod_color_id: string): Promise<ProdImage[]> {
        return this.prodImageModel.find({
            prod_color_id: prod_color_id
        }).lean()
    }

}