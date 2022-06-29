import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTamanofuente]'
})
export class TamanofuenteDirective {

  constructor(private elementRef: ElementRef) { 
    this.elementRef.nativeElement.style.fontSize = '20px';
  }

}