import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { UserResolver } from './user/user.resolver';
import { userProviders } from './user/user.providers';
import { databaseProviders } from './database/database.providers';
import { FavoriteService } from './favorite/favorite.service';
import { favoriteProviders } from './favorite/favorite.providers';
import { FavoriteModule } from './favorite/favorite.module';
import { FavoriteResolver } from './favorite/favorite.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      playground: false,
      // To use Apollo Sandbox instead of the graphql-playground as a GraphQL IDE for local development 
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    DatabaseModule,
    UserModule,
    FavoriteModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ...databaseProviders,
    UserService,
    UserResolver,
    ...userProviders,
    FavoriteService,
    FavoriteResolver,
    ...favoriteProviders
  ],
})
export class AppModule {}
