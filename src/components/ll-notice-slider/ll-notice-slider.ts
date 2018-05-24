import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LlTmpComponent } from "../ll-tmp/ll-tmp";
import { LlToastProvider } from '../../providers/ll-toast/ll-toast';

@Component({
  selector: 'll-notice-slider',
  templateUrl: 'll-notice-slider.html'
})
export class LlNoticeSliderComponent implements LlTmpComponent {

  data: any;

  constructor(public toast: LlToastProvider) {

  }

  ll_noticeSliderClick(item) {
    this.toast.showToast(item.title);
  }

}
