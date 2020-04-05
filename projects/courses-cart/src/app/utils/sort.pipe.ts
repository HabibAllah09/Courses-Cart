import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';

@Pipe({ name: 'sort' })
export class SortPipe implements PipeTransform {
  transform(value: any[], column: string = ''): any[] {
    if (!value || value.length <= 1) {
      return value;
    }
    if (!column || column === '') {
      return value.sort();
    }
    return orderBy(value, [column]);
  }
}
