import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverColors]'
})
export class HoverColorsDirective implements OnInit {
  @Input('appHoverColors') colors: {color: string, bgColor: string};
  constructor(private el: ElementRef,
              private renderer: Renderer2) { }
  ngOnInit(): void {
    this.changeColors(this.colors.color, this.colors.bgColor);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeColors(this.colors.bgColor, this.colors.color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeColors(this.colors.color, this.colors.bgColor);
  }
  private changeColors(color: string, bgColor: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
    this.renderer.setStyle(this.el.nativeElement, 'border-color', color);
    this.renderer.setStyle(this.el.nativeElement, 'background-color', bgColor);
  }
}
