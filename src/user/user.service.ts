import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { User } from "./entities/user.entity";

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_MODEL') private userModel: Model<User>
    ) {}

    async findOne(id: string): Promise<User> {
        const user: User = await this.userModel.findById(id)
        return user
    }

    findOneByEmail(email: string): Promise<User> {
        return this.userModel.findOne({ email: email })
    }

    getUsers(): Promise<User[]> {
        return this.userModel.find()
    }

}