import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'NamFilter'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value);

    if (!value) return null;
    if (!args) return value;

    args = args.toLowerCase();

    return value.filter(function (item: any) {
      return item.name.toLowerCase().includes(args);
    });
  }

}
