import { Connection } from 'typeorm';
import { Wallet } from './wallet.entity';

export const walletProviders = [
  {
    provide: 'WalletRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Wallet),
    inject: [ 'DbConnectionToken' ]
  }
];
