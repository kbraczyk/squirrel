import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formater'
})
export class FormaterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const [type] = args;

    switch (type) {
      case 'activity':
        return activityFormatter(value);

      case 'target':
        return targetFormatter(value);

      case 'firstWordLetter':
        return firstWordLetter(value);

      case 'mathRound':
        return Math.round(value);

      case 'dificultyRecipe':
        return dificultyRecipe(value);
    }
    return null;
  }
}

export const activityFormatter = (value) => {
  switch (value) {
    case 1.2:
      return 'niska';
    case 1.35:
      return 'mała';
    case 1.55:
      return 'średnia';
    case 1.75:
      return 'duża';
    case 2:
      return 'bardzo duża';
    default:
      return 'nieznana';
  }
};

export const dificultyRecipe = (value) => {
  switch (value) {
    case 0:
      return 'Łatwe';
    case 1:
      return 'Średnie';
    case 2:
      return 'Trudne';
    default:
      return value;

  }
};

export const targetFormatter = (value) => {
  switch (value) {
    case 1:
      return 'utrzymanie wagi';
    case 1.2:
      return 'podniesienie wagi';
    default:
      return 'utrata wagi';
  }
};

export const firstWordLetter = (value: string): string => {
  if (!value) { return ''; }
  return value.split(' ')[0];
};

