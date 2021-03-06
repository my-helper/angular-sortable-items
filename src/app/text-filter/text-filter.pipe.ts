import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../item';

@Pipe({
  name: 'textFilter',
  pure: false
})

export class TextFilterPipe implements PipeTransform {
  transform(items: Item[], word: string) {
    function nameContains(value: Item) {
      let name = value.name.toLowerCase();
      let symbols = word.toLowerCase();
      return name.startsWith(symbols);
    }

    return items.filter(nameContains);
  }
}
