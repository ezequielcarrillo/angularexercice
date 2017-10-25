import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appSearchFilter]'
})
export class SearchFilterDirective {

  constructor(private el: ElementRef) { }

  private resize() {
    this.el.nativeElement.classList.add('active');
  }
  private inactive() {
    this.el.nativeElement.classList.remove('active');
  }
  @Input('appSearchFilter')
  @HostListener('mousedown') onmouseen() {
    this.resize();
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.inactive();
  }

}
