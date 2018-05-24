import { Component, Input, AfterViewInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import {AdItem} from "../../common/adItem";
import {ContainerDirective} from "../../directives/container/container";
import {LlTmpComponent} from "../ll-tmp/ll-tmp";

@Component({
  selector: 'll-container',
  templateUrl: 'll-container.html'
})
export class LlContainerComponent {

  @Input() containerDirec:string;

  @Input() item;
  @ViewChild(ContainerDirective) adHost: ContainerDirective;
  subscription: any;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit() {

    this.loadComponent();
  }

  loadComponent() {

    let adItem = this.item;

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<LlTmpComponent>componentRef.instance).data = adItem.data;
  }
}
