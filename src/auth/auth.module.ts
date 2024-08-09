import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { JwtStrategy } from "./jwt.strategy";
import { UserService } from "src/user/user.service";
import { userProviders } from "src/user/user.providers";
import { DatabaseModule } from "src/database/database.module";

@Module({
    imports: [
      PassportModule,
      JwtModule.register({
        secret: "09f26e402586e2faa8da4c98a35f1b20d6b033c6097befa8be3486a829587fe2f90a832bd3ff9d42710a4da095a2ce285b009f0c3730cd9b8e1af3eb84df6611", // Replace with your own secret
        signOptions: { expiresIn: '60m' },
      }),
      DatabaseModule
    ],
    providers: [
        JwtStrategy,
        
        UserService,
        ...userProviders
    ],
  })
  export class AuthModule {}