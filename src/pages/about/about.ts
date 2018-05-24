import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {Baseui} from "../../common/baseui";
import {MockDataProvider} from "../../providers/mock-data/mock-data";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})


export class AboutPage extends Baseui {

  public innerHtml;

  constructor(public navCtrl: NavController,
              public toast: ToastController,
              public mock: MockDataProvider) {
    super();


  }

}
