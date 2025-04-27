import { Request } from 'express';
import { REQUEST } from '@nestjs/core';
import {
  Injectable,
  Scope,
  PipeTransform,
  ArgumentMetadata,
  Inject,
} from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
export class IdPipe implements PipeTransform {
  constructor(@Inject(REQUEST) protected readonly request: Request) {}

  transform(value: any, metadata: ArgumentMetadata): any {
    if (metadata.type === 'body' && value && typeof value === 'object') {
      const id = this.request.params?.id;
      if (id) {
        value.id = +id; // Assuming id should be a number in the DTO
      }
    }

    return value;
  }
}
