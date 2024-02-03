import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean){
    if(!condition){
      this.vieContainerref.createEmbeddedView(this.templateRef);
    } else{
      this.vieContainerref.clear();
    }
    
  }
  constructor(private templateRef: TemplateRef<any>, private vieContainerref: ViewContainerRef) { }

}
