import mongoose from "mongoose";
import { ConfigModule, ConfigService } from "@nestjs/config";

export const databaseProviders = [
    {
        import: [ConfigModule],
        provide: 'DATABASE_CONNECTION',
        useFactory: async (configService: ConfigService): Promise<typeof mongoose> => {
            const connectionData = {
                host: configService.get<string>('mongodb.database.host'),
                port: configService.get<number>('mongodb.database.port'),
                databaseName: configService.get<string>('mongodb.database.databaseName')
            }
            const connection = await mongoose.connect(`mongodb://${connectionData.host}:${connectionData.port}/${connectionData.databaseName}`)
            return connection
        },
        inject: [ConfigService]
    }
]