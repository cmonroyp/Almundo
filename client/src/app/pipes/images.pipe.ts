import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'images'
})
export class ImagesPipe implements PipeTransform {

  transform(image: any[]): string {

    if( image.length > 0 ){
      return  'assets/images/hotels/' + image;
    }else{
      return 'assets/images/hotels/noimage.png';
    }
  }

}
