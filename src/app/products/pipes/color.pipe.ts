import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interface';

@Pipe({
  name: 'colorHero'
})

export class ColorPipe implements PipeTransform {
  transform( colorHero: Color ): any {
    switch(colorHero) {
      case Color.red:
        return 'Red';
      case Color.black:
        return 'Black';
      case Color.blue:
        return 'Blue';
      case Color.green:
        return 'Green';
      default:
        return 'No tiene color';
    }
  }
}
