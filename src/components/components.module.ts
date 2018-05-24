import {NgModule} from '@angular/core';
import {LlSliderComponent} from './ll-slider/ll-slider';
import {LlNoticeSliderComponent} from './ll-notice-slider/ll-notice-slider';
import {LlMenuWrapperComponent} from './ll-menu-wrapper/ll-menu-wrapper';
import {LlHotMenuWrapperComponent} from './ll-hot-menu-wrapper/ll-hot-menu-wrapper';
import {IonicPageModule} from 'ionic-angular';
import {LlHomeListWrapperComponent} from './ll-home-list-wrapper/ll-home-list-wrapper';
import {LlContainerComponent} from './ll-container/ll-container';
import {LlTmpComponent} from './ll-tmp/ll-tmp';
import {DirectivesModule} from "../directives/directives.module";
import { LlToastProvider } from '../providers/ll-toast/ll-toast';

@NgModule({
  declarations: [LlSliderComponent,
    LlNoticeSliderComponent,
    LlMenuWrapperComponent,
    LlHotMenuWrapperComponent,
    LlHomeListWrapperComponent,
    LlContainerComponent,
    LlTmpComponent
  ],
  imports: [
    IonicPageModule,
    DirectivesModule
  ],
  exports: [LlSliderComponent,
    LlNoticeSliderComponent,
    LlMenuWrapperComponent,
    LlHotMenuWrapperComponent,
    LlHomeListWrapperComponent,
    LlContainerComponent,
    LlTmpComponent
  ],
  providers:[LlToastProvider]
})
export class ComponentsModule {
}
