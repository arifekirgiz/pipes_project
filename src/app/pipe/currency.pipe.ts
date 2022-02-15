import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: number) {

 
      let val = (value/1).toFixed(2).replace('.', ',')
      return "$" +  val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
 
   
  }

}
