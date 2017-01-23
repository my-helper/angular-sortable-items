import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../item';

@Pipe({
  name: 'flags',
  pure: false
})

export class FlagPipe implements PipeTransform {
  transform(arr: Item[], flags: string[]) {

    let findOne = function (haystack: any, arr: any) {
      return arr.every(function (element: any) {
        console.log('el', element);
        return haystack.indexOf(element) >= 0;
      });
    };

    return arr.filter((value) => {
      return findOne(flags, value.flags)
    });
  }
}
