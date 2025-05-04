import { Request } from 'express';
import { REQUEST } from '@nestjs/core';
import {
  Injectable,
  Scope,
  PipeTransform,
  ArgumentMetadata,
  Inject,
} from '@nestjs/common';
import { EntityType } from '../types/entity.type';

@Injectable({ scope: Scope.REQUEST })
export class IdPipe implements PipeTransform {
  constructor(@Inject(REQUEST) protected readonly request: Request) {}

  transform(value: EntityType, metadata: ArgumentMetadata): any {
    if (metadata.type === 'body') {
      const id = this.request.params?.id;

      if (id) {
        value.id = +id;
      }
    }

    return value;
  }
}
