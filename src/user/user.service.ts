import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { User } from "./entities/user.entity";

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_MODEL') private userModel: Model<User>
    ) {}

    findOne(id: string): Promise<User> {
        return this.userModel.findById(id)
    }

}