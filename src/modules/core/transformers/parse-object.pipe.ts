import { Injectable, NotFoundException, PipeTransform } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

export const ObjectPipe = (entity: any, relations?: string[]) => {
  @Injectable()
  class ParseObjectPipe implements PipeTransform {
    constructor(@InjectDataSource() public readonly dataSource: DataSource) {}

    async transform(id: string): Promise<any> {
      const row = await this.dataSource.getRepository(entity).findOne({
        where: { id },
        relations,
      });

      if (!row) {
        throw new NotFoundException(`Entity not found with id: ${id}`);
      }

      return row;
    }
  }

  return ParseObjectPipe;
};
