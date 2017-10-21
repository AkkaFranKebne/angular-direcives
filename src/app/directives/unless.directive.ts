import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {  //name same as a selector!
    if (!condition) {
        this.viewContainerRef.createEmbeddedView(this.templateRef); //creates instance of our template
    }
    else{
      this.viewContainerRef.clear() ; //clean this place in DOM
    }
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }  //what we render (template) and where (view container ref)

}
