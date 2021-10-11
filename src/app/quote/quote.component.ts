import { Component, OnInit } from '@angular/core';
import { faTrashAlt,faQuoteLeft} from '@fortawesome/free-solid-svg-icons';
import { Quote } from '../quote';
import { QuoteMessage } from '../quote-message';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes : Quote [] = [
    new Quote('Elon Musk','The first step is to establish that something is possible; then the probability will occur','Tesla',new Date(2021,9,10)),
    new Quote ('Sheldon Okware','Worth the time that you ought to keep','Loki',new Date(2021,9,9)),
 ];

 showQuoteDetails ( index : any) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  quotel = faQuoteLeft;
  faDelete = faTrashAlt;
  deleteQuote (confirmIt: any, index : any) : any{
    if(confirmIt){
      let toConfirm = confirm('Are you sure you want to delete this quote?');
      if(toConfirm) {
        this.quotes.splice(index,1);
      }
      
    }
    
  }
  
  yourName!: string;
  yourQuote!: string;
  authorName!: string;
  newAddQuote : any; 

  addAQuote (quote : any) {
    this.newAddQuote = new QuoteMessage (0,this.yourName,this.yourQuote,this.authorName, new Date(Date.now()));
    this.quotes.unshift(quote);
  } 

  constructor() { }

  ngOnInit(): void {
  }

}
