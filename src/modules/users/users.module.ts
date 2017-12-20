import {Module} from '@nestjs/common';
import { userProviders } from './user.providers';

@Module({
  components: [
    ...userProviders
  ],
  exports: [
    ...userProviders
  ]
})
export class UsersModule {}
