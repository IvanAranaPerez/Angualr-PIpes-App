import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCasePipe'
})

export class ToggleCasePipe implements PipeTransform {
  transform(value: string, toUpper: boolean = false ): string {

    // console.log({ value, toUpper });

    return ( toUpper ) ? value.toUpperCase(): value.toLowerCase();

  }
}
