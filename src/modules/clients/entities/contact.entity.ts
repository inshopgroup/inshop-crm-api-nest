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

  @ManyToOne(() => Client, { nullable: false, eager: false })
  client: Client;

  @Column()
  value: string;

  @Column({ type: 'enum', enum: ['email', 'phone'] })
  type: string;

  @Column({ default: true })
  isActive: boolean;
}
