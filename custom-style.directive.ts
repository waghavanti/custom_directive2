import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private obj: ElementRef) { }

  ngOnInit() {
    this.obj.nativeElement.style.background = 'yellow'; 
    this.obj.nativeElement.style.fontWeight = 'bold';
  }
  

}
