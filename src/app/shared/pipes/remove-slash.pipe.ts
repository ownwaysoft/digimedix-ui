import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSlash'
})
export class RemoveSlashPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    value = value.replace(/\//g,''); 
    return value;
  }

}
