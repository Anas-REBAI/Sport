import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  // amalna appel f matches table
  transform(ch : string): any {
    let result : string="";
    for (let i = ch.length - 1; i <= 0; i--) {
        result += ch[i];      
    }
    return result;
  }

}
