import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlighterMouse]'
})
export class HighlighterMouseDirective {
  // @HostListener('mouseenter') onMouseOver() {
  //   this._renderer.setStyle(
  //     this._elementRef.nativeElement,
  //     'background-color',
  //     'yellow'
  //   )
  // }

  // @HostListener('mouseout') onMouseOut() {
  //   this._renderer.setStyle(
  //     this._elementRef.nativeElement,
  //     'background-color',
  //     'white'
  //   )
  // }

  // @HostBinding('style.background-color') backgroundColor: string = ''

  @HostBinding('style.backgroundColor') get setColor(){
    //codigo extra;
    return this.backgroundColor;
  }

  private backgroundColor: string = '';

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = 'yellow'
  }

  @HostListener('mouseout') onMouseOut() {
    this.backgroundColor = 'white'
  }

  constructor(
    // private _elementRef: ElementRef,
    // private _renderer: Renderer2
  ) { }
}
