import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LlTmpComponent} from "../ll-tmp/ll-tmp";
import {NavController} from "ionic-angular";
import {AboutPage} from "../../pages/about/about";

@Component({
  selector: 'll-slider',
  templateUrl: 'll-slider.html'
})
export class LlSliderComponent implements LlTmpComponent{

  @Input() data: any;

  @Input() sliderArray: [any];

  @Output()
  sliderClick: EventEmitter<any> = new EventEmitter();

  constructor(public navCtrl: NavController) {

  }


  ll_sliderClick(item) {
    this.navCtrl.push(AboutPage)
  }

}
