import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LlTmpComponent} from "../ll-tmp/ll-tmp";
import { LlToastProvider } from '../../providers/ll-toast/ll-toast';


@Component({
  selector: 'll-hot-menu-wrapper',
  templateUrl: 'll-hot-menu-wrapper.html'
})
export class LlHotMenuWrapperComponent implements LlTmpComponent{
  data: any;


  constructor(public toast: LlToastProvider) {

  }

  hotMenuClick(menu) {
    this.toast.showToast(menu.name);
  }

}
