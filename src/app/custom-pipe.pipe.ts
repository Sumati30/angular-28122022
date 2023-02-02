import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {
  
  transform(value: any, status: string): any {
    if(value.length===0 || status===''){
      return value;
    }else{
      const statusArray = [];
      for(let item of value){
        if(item.status===status){
          statusArray.push(item)
         }
      }
      console.log(statusArray)
      return statusArray;
    }
    
  }

}
