import { LlHomeListWrapperComponent } from './../../components/ll-home-list-wrapper/ll-home-list-wrapper';
import {Injectable} from '@angular/core';
import {AdItem} from "../../common/adItem";
import {LlSliderComponent} from "../../components/ll-slider/ll-slider";
import {MockDataProvider} from "../mock-data/mock-data";
import {LlMenuWrapperComponent} from "../../components/ll-menu-wrapper/ll-menu-wrapper";
import {LlNoticeSliderComponent} from "../../components/ll-notice-slider/ll-notice-slider";
import {LlHotMenuWrapperComponent} from "../../components/ll-hot-menu-wrapper/ll-hot-menu-wrapper";

@Injectable()
export class ContainerProvider {

  public dataSource = [];

  constructor(public mock: MockDataProvider) {
  }

    /**
   * app首页配置文件
   * 
   * @memberof AppConfigProvider
   */
  private configs = [
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



  /**
   * 获取AdItem对象的数组
   * 
   * @returns 
   * @memberof ContainerProvider
   */
  getItemArray() {

    let configArray = this.configs;
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
  
}
