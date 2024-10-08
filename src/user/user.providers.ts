import { Connection } from "mongoose";
import { UserSchema } from "./entities/user.entity";

export const userProviders = [
    {
        provide: 'USER_MODEL',
        useFactory: (connection: Connection) =>
            connection.model('User', UserSchema),
        inject: ['DATABASE_CONNECTION'],
    }
]