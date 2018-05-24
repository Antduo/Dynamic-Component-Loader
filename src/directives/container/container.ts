import {Directive, Input, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[ll-container]' // Attribute selector
})
export class ContainerDirective {

  constructor(public viewContainerRef: ViewContainerRef) {
  }

}
