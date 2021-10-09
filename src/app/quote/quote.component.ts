import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes : Quote [] = [
    new Quote ('Sheldon Okware','Worth the time that you ought to keep','Loki'),
    new Quote('Elon Musk','The first step is to establish that something is possible; then the probability will occur','Tesla'),
 ];

 showQuoteDetails ( index : any) {
  this.quotes[index].showDetails = !this.quotes[index].showDetails;
}

  constructor() { }

  ngOnInit(): void {
  }

}
