import { Component, OnInit, Input } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

}
