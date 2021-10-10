import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  yourName!: string;
  yourQuote!: string;
  authorName!: string;
  newAddQuote : any;
 
  newQuote = [
    new Quote("","","",new Date()),
  ];

  addQuote () {
    this.newAddQuote = new Quote (this.yourName,this.yourQuote,this.authorName, new Date());
    this.newQuote.unshift(this.newAddQuote);
  }
   
/*   @Output() addQuotes = new EventEmitter <Quote> ();
  
  addQuote () {
    this.addQuotes.emit(this.newQuote);

  } */

  constructor() { }

  ngOnInit(): void {
  }

}
