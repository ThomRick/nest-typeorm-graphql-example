import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Wallet } from '../wallets/wallet.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(type => Wallet, wallet => wallet.user)
  wallets: Wallet[]
}
