import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import { QuoteMessage } from '../quote-message';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
/*   yourName!: string;
  yourQuote!: string;
  authorName!: string;
  newAddQuote : any; */
 
  newQuote =  new QuoteMessage(0,"","","",new Date());

/* 
  addQuote () {
    this.newAddQuote = new QuoteMessage (0,this.yourName,this.yourQuote,this.authorName, new Date());
    this.newQuote.unshift(this.newAddQuote);
  } */
   
  @Output() addQuotes = new EventEmitter <QuoteMessage> ();
  
  addQuote () {
    this.addQuotes.emit(this.newQuote);
  } 

  constructor() { }

  ngOnInit(): void {
  }

}
