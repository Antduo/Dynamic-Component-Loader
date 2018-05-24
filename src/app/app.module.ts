import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ComponentsModule } from '../components/components.module';
import { MockDataProvider } from '../providers/mock-data/mock-data';
import {DirectivesModule} from "../directives/directives.module";
import { ContainerProvider } from '../providers/container/container';
import {LlSliderComponent} from "../components/ll-slider/ll-slider";
import {LlMenuWrapperComponent} from "../components/ll-menu-wrapper/ll-menu-wrapper";
import { HttpServicesProvider } from '../providers/http-services/http-services';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import {HttpModule, JsonpModule} from "@angular/http";
import {LlNoticeSliderComponent} from "../components/ll-notice-slider/ll-notice-slider";
import {LlHotMenuWrapperComponent} from "../components/ll-hot-menu-wrapper/ll-hot-menu-wrapper";
import {LlHomeListWrapperComponent} from "../components/ll-home-list-wrapper/ll-home-list-wrapper";
import { LlToastProvider } from '../providers/ll-toast/ll-toast';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    DirectivesModule,
    HttpClientModule,
    HttpModule,
    JsonpModule,
    HttpClientJsonpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LlSliderComponent,
    LlMenuWrapperComponent,
    LlNoticeSliderComponent,
    LlHotMenuWrapperComponent,
    LlHomeListWrapperComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MockDataProvider,
    ContainerProvider,
    HttpServicesProvider,
    LlToastProvider
  ]
})
export class AppModule {}
