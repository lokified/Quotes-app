import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {


  constructor(private  elem : ElementRef) { }
   
  @HostListener ('click') onClicks() {
    this.cardHighlight('green');
  }

  public cardHighlight (action : string) {
     this.elem.nativeElement.style.color = action;
  }
}
