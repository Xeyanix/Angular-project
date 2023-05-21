import { Pipe, PipeTransform } from '@angular/core';
import { snake } from './definition';

@Pipe({
  name: 'sortPoints',
})
export class SortPipe implements PipeTransform {
  transform(
    value: Array<snake>,
    fieldName: string,
    sortDir: 'PASC' | 'PDSC'
  ): Array<snake> {
    if (sortDir === 'PASC') {
      return value.sort((a, b) => {
        if (a.score > b.score) {
          return -1;
        } else {
          return 1;
        }
      });
    } else {
      return value.sort((a, b) => {
        if (a.score > b.score) {
          return 1;
        } else {
          return - 1;
        }
      });
    }
  }
}
