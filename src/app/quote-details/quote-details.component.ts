import { Component, OnInit, Input} from '@angular/core';
import { Quote } from '../quote';
import {  faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote! : Quote;

  faDown = faThumbsDown;
  faUp = faThumbsUp;

  up = 0;
  upVote () {
    this.up++;  
  }

  down =0;
  downVote () {
     this.down++;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
