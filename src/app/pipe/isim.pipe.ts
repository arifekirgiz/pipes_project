import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isim'
})
export class IsimPipe implements PipeTransform {

  transform(value: string){
    
    const deger = value.trim()
  
    return deger[0].toUpperCase() + deger.substring(1)
  }

}
