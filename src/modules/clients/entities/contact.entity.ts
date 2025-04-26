import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  Unique,
} from 'typeorm';
import { Client } from './client.entity';

@Entity()
@Unique(['value', 'type'])
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Client)
  client: Client;

  @Column()
  value: string;

  @Column({ type: 'enum', enum: ['email', 'phone'] })
  type: string;

  @Column({ default: false })
  isActive: boolean;
}
