import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formater'
})
export class FormaterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const [type] = args;

    if (type === 'activity') {
      switch (value) {
        case 1.2: {
          return 'niska';
        }
        case 1.35: {
          return 'mała';
        }
        case 1.55: {
          return 'średnia';
        }
        case 1.75: {
          return 'duża';
        }
        case 2: {
          return 'bardzo duża';
        }
        default: {
          return 'nieznana';
        }
      }
    } else if (type === 'target') {
      switch (value) {
        case 1: {
          return 'utrzymanie wagi';
        }
        case 1.2: {
          return 'podniesienie wagi';
        }
        default: {
          return 'utrata wagi';
        }
      }
    }
    return null;
  }
}
