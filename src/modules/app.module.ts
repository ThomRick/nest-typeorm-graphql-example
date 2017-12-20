import { Module } from '@nestjs/common';
import { GraphqlModule } from './graphql/graphql.module';

@Module({
  modules: [
    GraphqlModule
  ]
})
export class AppModule {}
