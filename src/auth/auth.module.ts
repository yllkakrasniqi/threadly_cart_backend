import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { JwtStrategy } from "./jwt.strategy";
import { UserService } from "src/user/user.service";
import { userProviders } from "src/user/user.providers";
import { DatabaseModule } from "src/database/database.module";
import { ConfigModule, ConfigService } from "@nestjs/config";

/**
 * The JwtModule handles signing tokens using the secret.
 * The JwtStrategy handles verifying tokens using the same secret.
 * 
 */
@Module({
    imports: [
      PassportModule,
      ConfigModule,
      DatabaseModule,

      JwtModule.registerAsync({
        imports:[ConfigModule],
        useFactory: async (configService: ConfigService) => ({
          secret: configService.get<string>('jwt.secret'),
          signOptions: { expiresIn: '60m' },
        }),
        inject: [ConfigService]
      })
    ],
    providers: [
        JwtStrategy,
  
        UserService,
        ...userProviders
    ],
  })
  export class AuthModule {}