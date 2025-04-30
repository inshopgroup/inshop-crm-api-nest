import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Module } from './module.entity';
import { Group } from './group.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  role: string;

  @ManyToOne(() => Module, (module) => module.roles)
  module: Module;

  @ManyToMany(() => Group, (group) => group.roles)
  @JoinTable()
  groups: Group[];
}
