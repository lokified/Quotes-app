import { Component, OnInit } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes : Quote [] = [
    new Quote ('Sheldon Okware','Worth the time that you ought to keep','Loki',new Date(2021,9,9)),
    new Quote('Elon Musk','The first step is to establish that something is possible; then the probability will occur','Tesla',new Date(2021,9,10)),
 ];

 showQuoteDetails ( index : any) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  faDelete = faTrashAlt;
  deleteQuote (confirmIt: any, index : any) : any{
    if(confirmIt){
      confirm('Are you sure you want to delete this quote?');
      this.quotes.splice(index,1);
    }
    
  }

/*   addAQuote (quote : any) {
    this.quotes.unshift(quote);
  } */

  constructor() { }

  ngOnInit(): void {
  }

}
