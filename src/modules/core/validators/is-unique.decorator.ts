import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments, validateSync,
} from 'class-validator';
import { Injectable, Type } from '@nestjs/common';
import { DataSource, Not } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';

@ValidatorConstraint({ async: true })
@Injectable()
export class IsUniqueConstraint implements ValidatorConstraintInterface {
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  async validate(_value: unknown, args: ValidationArguments): Promise<boolean> {
    type EntityType = { [key: string]: unknown };

    const [entity, properties] = args.constraints as [Type<any>, string[]];
    const object = args.object as EntityType;
    const repository = this.dataSource.getRepository(entity);

    // Run synchronous validation for the object
    const validationErrors = validateSync(object, {
      skipMissingProperties: true,
    });

    if (validationErrors.length > 0) {
      // Skip uniqueness check if other validations fail
      return false;
    }

    const where: { [key: string]: unknown } = {};
    properties.forEach((property) => {
      where[property] = object[property];
    });

    if (object.id) {
      where.id = Not(object.id);
    }

    const record: unknown = await repository.findOne({ where });

    return !record;
  }

  defaultMessage(validationArguments: ValidationArguments): string {
    const [properties] = validationArguments.constraints as [string[]];

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
