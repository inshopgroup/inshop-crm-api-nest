import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { Injectable, Type } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { Client } from '../../clients/entities/client.entity';

@ValidatorConstraint({ async: true })
@Injectable()
export class IsUniqueConstraint implements ValidatorConstraintInterface {
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
    // @InjectRepository(Client)
    // private clientsRepository: Repository<Client>,
  ) {}

  async validate(_value: unknown, args: ValidationArguments): Promise<boolean> {
    const [entity, properties] = args.constraints as [Type<any>, string[]];
    const object = args.object;

    console.log(
      'IsUniqueConstraint validate',
      this.dataSource,
      // this.clientsRepository,
    );
    const repository = this.dataSource.getRepository(entity);

    const where = properties.map((property) => ({
      [property]: object[property] as string,
    }));

    // if (object.id) {
    //   where.push({ id: { Not(object.id as number) } });
    // }

    const record: unknown = await repository.findOne({ where });

    return !record;
  }

  defaultMessage(validationArguments: ValidationArguments): string {
    const [entity, properties] = validationArguments.constraints as [
      unknown,
      string[],
    ];

    return `${properties.join(', ')} must be unique.`;
  }
}

export function IsUnique(
  entity: any,
  properties: string[],
  options?: ValidationOptions,
): (object: object, propertyName: string) => void {
  return function (object: object, propertyName: string): void {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options,
      constraints: [entity, properties],
      validator: IsUniqueConstraint,
    });
  };
}
