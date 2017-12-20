import {Module} from '@nestjs/common';
import { walletProviders } from './wallet.providers';

@Module({
  components: [
    ...walletProviders
  ],
  exports: [
    ...walletProviders
  ]
})
export class WalletsModule {}
