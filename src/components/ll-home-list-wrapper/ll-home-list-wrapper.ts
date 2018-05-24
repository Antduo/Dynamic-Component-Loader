import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LlTmpComponent } from "../ll-tmp/ll-tmp";
import { LlToastProvider } from '../../providers/ll-toast/ll-toast';

@Component({
  selector: 'll-home-list-wrapper',
  templateUrl: 'll-home-list-wrapper.html'
})
export class LlHomeListWrapperComponent implements LlTmpComponent {

  data: any;

  constructor(public toast: LlToastProvider) {

  }

  ll_listItemClick(item) {
    this.toast.showToast(item.title);
  }

}
