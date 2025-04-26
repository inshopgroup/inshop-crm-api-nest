import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Module } from './module.entity';

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
}
