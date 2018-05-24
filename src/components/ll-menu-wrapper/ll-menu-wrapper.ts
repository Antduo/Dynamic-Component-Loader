import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LlTmpComponent } from "../ll-tmp/ll-tmp";
import { LlToastProvider } from '../../providers/ll-toast/ll-toast';
import { elementDef } from '@angular/core/src/view/element';

@Component({
  selector: 'll-menu-wrapper',
  templateUrl: 'll-menu-wrapper.html'
})
export class LlMenuWrapperComponent implements LlTmpComponent {

  data: any;

  
  private nums = 8; // 一个 slide 里面做多 8 个元素
  protected sliderHeight; // 动态计算sider的高度

  protected dataSource = []; // 存放数据的数组
  pager: boolean = true; // 是否显示底部的分页符号

  constructor(public toast: LlToastProvider) {

  }

  ngOnInit() {

    // 计算出需要多少也显示
    let groupNumber = Math.ceil(this.data.dataSource.length / this.nums);

    this.getSliderHeight(groupNumber);

    this.dealDataSource(groupNumber);

  }

  /**
   * 处理服务器返回的数据 并分组
   * 
   * @param {number} groupNumber 
   * @memberof LlMenuWrapperComponent
   */
  dealDataSource(groupNumber: number) {
    for (let i = 0; i < groupNumber; i++) {
      this.dataSource.push(this.data.dataSource.slice(this.nums * i, this.nums * (i + 1)));
    }
  }

  /**
   * 动态计算 silder 的高度
   * 
   * @param {number} groupNumber 
   * @memberof LlMenuWrapperComponent
   */
  getSliderHeight(groupNumber: number) {
    // 如果大于1页
    if (groupNumber > 1) {
      this.sliderHeight = '17rem';
      this.pager = true;
    } else {
      let row = Math.ceil(this.data.dataSource.length / 4);
      this.sliderHeight = 8 * row + 'rem';
      this.pager = false;
    }
  }

  ll_menuWrapperClick(menu) {

    this.toast.showToast(menu.name);
  }


}
