import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amenities'
})
export class AmenitiesPipe implements PipeTransform {

  transform(icon: any[]): any {
  
    if(icon.length > 0){
      return 'assets/icons/amenities/' + `${icon}.svg`;
    }
  }

}
