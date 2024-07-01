import { Inject, Injectable } from "@nestjs/common";
import { UserFavorite } from "./entities/userfavorites.entity";
import { Model } from "mongoose";
import { AddFavoriteInput } from "./dto/add-favorite.input";

@Injectable() 
export class FavoriteService {
    constructor(
        @Inject('FAVORITE_MODEL') private favoriteModel: Model<UserFavorite>
    ) {}

    findByUser(userID: string): Promise<UserFavorite[]> {
        return this.favoriteModel.find({userID: userID}).lean()
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
}