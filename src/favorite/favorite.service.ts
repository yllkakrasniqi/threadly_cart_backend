import { Inject, Injectable } from "@nestjs/common";
import mongoose, { Model } from "mongoose";
import { AddFavoriteInput } from "./dto/add-favorite.input";
import { UserFavorite } from "./entities/userfavorites.entity";
import { ProdColor } from "./entities/prodcolor.entity";
import { ProdImage } from "./entities/prodimage.entity";

@Injectable() 
export class FavoriteService {
    constructor(
        @Inject('FAVORITE_MODEL') private favoriteModel: Model<UserFavorite>,
        @Inject('PRODCOLOR_MODEL') private prodColorModel: Model<ProdColor>,
        @Inject('PRODIMAGE_MODEL') private prodImageModel: Model<ProdImage>,
    ) {}

    findByUser(userID: string): Promise<UserFavorite[]> {
        return this.favoriteModel.find({userID: userID}).lean()
    }

    async findFavoriteProduct(favoriteInput: AddFavoriteInput): Promise<UserFavorite | null> {
        const favoriteProduct = await this.favoriteModel.findOne({
            userID: favoriteInput.userID,
            prod_color_id: favoriteInput.prod_color_id
        }).lean()
        if(!favoriteProduct){
            return null
        }
        return favoriteProduct
    }
    
    async addFavorite(addFavoriteInput: AddFavoriteInput) {
        let prevUserFavorite = await this.favoriteModel.findOne({
            userID: addFavoriteInput.userID,
            prod_color_id: addFavoriteInput.prod_color_id
        })
        if(prevUserFavorite) {
            return this.favoriteModel.findByIdAndUpdate(prevUserFavorite._id, {
                check: !prevUserFavorite.check
            })
        } else {
            return this.favoriteModel.create({
                userID: addFavoriteInput.userID,
                prod_color_id: addFavoriteInput.prod_color_id,
                check: true
            })
        }
    }

    findProdColor(id: string): Promise<ProdColor> {
        return this.prodColorModel.findById(id).lean()
    }

    async findProdImage(prod_color_id: string): Promise<ProdImage[]> {
        return this.prodImageModel.find({
            prod_color_id: prod_color_id
        }).lean()
    }

}