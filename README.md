# Dynamic-Component-Loader
ionic 之 动态加载组件

><h2>产品需求: 根据服务器返回的配置文件, 动态的调用组件生成页面</h2>

上面的需求乍一听,很简单! 在`React.js`里面, 可以使用`Jsx`语法,分分钟搞定. 或者可以使用`innerHTML`动态的嵌入组件.

然而, 在`angualr`中, 没有`Jsx`语法, `innerHTML`只能嵌入`html`标签;
 如果嵌入组件的话,  组件中的`js`就失效了(`I think it’s best to pretend innerHTML doesn’t exist.`)

那么在`angular`中具体怎么实现上述的需求呢? 官网给出了一个demo [点我](https://angular.io/guide/dynamic-component-loader);
具体可以参照官网

当然官网的例子是`angular`写的, 可以翻译成`ionic`形式; 具体的可以查看底部的`demo`

> <h2>ionic 容器动态加载组件</h2>
1.1  自定义组件 根据需求定义需要的组件

![自定义组件](http://upload-images.jianshu.io/upload_images/1482909-ad74ff7092a0750a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

1.2 在添加组件之前，先要定义一个锚点来告诉Angular要把组件插入到什么地方。
定义一个名叫`container`的辅助指令来在模板中标记出有效的插入点。

![创建container指令](http://upload-images.jianshu.io/upload_images/1482909-fcb484a0d7726174.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
指令代码如下:
```
import {Directive, Input, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[ll-container]' // Attribute selector
})
export class ContainerDirective {

  constructor(public viewContainerRef: ViewContainerRef) {
  }

}
```

1.3 在1.1图片中的`ll-container`是一个组件容器, 想要实现动态加载的组件, 都需放在该容器里面

在 `ll-container`容器中需要创建一个模板,并添加指令`ll-container`
```
<ng-template ll-container></ng-template>
```
`ll-container.ts`中具体实现:
`LlContainerComponent`接收一个`AdItem`对象的数组作为输入，它最终来自`ContainerProvider`。 `AdItem`对象指定要加载的组件类，以及绑定到该组件上的任意数据。
```
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

```

2. 模拟服务器配置文件
```
public configs = [
    {
      id: "1111",
      categoryId:"a1",
      dataSource: this.mock.sliderArray,
      name: "广告"
    },
    {
      id: "2222",
      categoryId:"a2",
      dataSource: this.mock.noticeList,
      name: "noticeList"
    },
    {
      id: "3333",
      categoryId:"a3",
      dataSource: this.mock.hotMenu1,
      name: "hotmenus1"
    },
    {
      id: "4444",
      categoryId:"a4",
      dataSource: this.mock.menuList,
      name: "menus"
    },
    {
      id: "5555",
      categoryId:"a3",
      dataSource: this.mock.hotMenu2,
      name: "hotmenus2"
    },
    {
      id: "6666",
      categoryId:"a5",
      dataSource: this.mock.activityList,
      name: "活动列表"
    }
  ];
```
3. 根据配置文件动态的调用组件
```
  /**
   * 获取AdItem对象的数组
   * 
   * @returns 
   * @memberof ContainerProvider
   */
  getItemArray() {

    let configArray = this.appConfig.configs;
    let tempComponent;

    for (let i = 0; i < configArray.length; i++) {
      let item = configArray[i];
      tempComponent = this.getComponent(item.categoryId);
      this.dataSource.push(new AdItem(tempComponent, {dataSource: item.dataSource}));
    }
    return this.dataSource;
  }

  /**
   * 根据 categoryId 返回不同的组件
   * 
   * @param categoryId 
   */
  getComponent(categoryId) {

    if(!categoryId){
      return '';
    }
    if (categoryId == "a1") {
      return LlSliderComponent;
    } else if (categoryId == "a2") {
      return LlNoticeSliderComponent;
    } else if (categoryId == "a3") {
      return LlHotMenuWrapperComponent;
    } else if (categoryId == "a4") {
      return LlMenuWrapperComponent;
    } else if (categoryId == "a5") {
      return LlHomeListWrapperComponent;
    }
  }
```
4. 在需要动态显示的界面调用容器
```
<ion-content>

  <div *ngIf="itemArray.length !=0" >
    <ll-container *ngFor="let item of itemArray;" [item]="item"></ll-container>
  </div >

</ion-content>
```

5. 实现效果

![效果图](http://upload-images.jianshu.io/upload_images/1482909-1b9f579c328be268.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

