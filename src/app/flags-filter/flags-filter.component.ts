import { Component, Input } from '@angular/core';
// import { Item } from '../item';

@Component({
  selector: 'flag-filter',
  templateUrl: './flags-filter.component.html',
  styleUrls: ['./flag-filter.component.css']
})

export class FlagFilterComponent {
  @Input() flags: string[];
  @Input() selected: string[];
  constructor() {}

  toggleFlag = function (flag: string) {
    let arr = this.flags;
    let include = arr.includes(flag);

    if (include) {
      let index = arr.indexOf(flag);
      this.flags.splice(index, 1);
    } else {
      this.flags.push(flag);
    }
  }
}
