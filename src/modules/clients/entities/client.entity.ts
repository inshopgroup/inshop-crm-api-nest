import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Contact } from './contact.entity';
import { Exclude } from 'class-transformer';
import * as bcrypt from 'bcrypt';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => Contact, (contact) => contact.client)
  contacts: Contact[];

  @BeforeInsert()
  generatePasswordHash(): void {
    const saltOrRounds = 10;
    this.password = bcrypt.hashSync(this.password, saltOrRounds);
  }
}
