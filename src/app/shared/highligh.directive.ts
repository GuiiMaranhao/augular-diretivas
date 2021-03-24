import { Directive, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[highligh]'
})
export class HighlighDirective {

  constructor() { }

  @Input() defaultColor: string = 'white';
  @Input('highligh') highlightColor: string = 'yellow';

  @HostBinding('style.background-color') backgroundColor: string = ''

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.highlightColor
  }

  @HostListener('mouseout') onMouseOut() {
    this.backgroundColor = this.defaultColor
  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor
  }
}
