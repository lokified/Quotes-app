import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today : Date = new Date (); //current date and time
    let todayWithNoTime : any = new Date (today.getFullYear(),today.getMonth(),today.getDate()); 

    var dateDifference = Math.abs(value - todayWithNoTime);

    const secondsInDay = 86400; //seconds found in a day

    var dateDifferenceSeconds = dateDifference * 0.001; // converts milliseconds to seconds

    var dateCounter = dateDifferenceSeconds / secondsInDay;

    if (dateCounter >= 1 && value > todayWithNoTime) {
      return dateCounter;
    }
    else{
      return 0;
    }
    
  }

}
