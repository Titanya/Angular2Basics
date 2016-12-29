import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
  selector: '[myShadowLight]'
})
export class ShadowLightDirective {
  @Input() highlightColor: string;
  constructor(private el: ElementRef) { }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#C5CAE9');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}