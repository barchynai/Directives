import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }

  @Input('appTimes') set render(times: number) {
    this.viewContainer.clear(); //cleans up whats already inside


    //creates new elements from scratch 
    for (let i=0; i< times; i++){
      this.viewContainer.createEmbeddedView(this.templateRef, {
        index: i //to get access to index as in *ngFor
      })
    }
  }
}
