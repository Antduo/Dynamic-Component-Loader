import {Component} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {Baseui} from "../../common/baseui";
import {MockDataProvider} from "../../providers/mock-data/mock-data";
import {ContainerProvider} from "../../providers/container/container";
import {AdItem} from "../../common/adItem";
import {HttpServicesProvider} from "../../providers/http-services/http-services";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage extends Baseui {

  itemArray: AdItem[];

  constructor(public navCtrl: NavController,
              public toast: ToastController,
              public mock: MockDataProvider,
              public container: ContainerProvider,
              public http: HttpServicesProvider) {
    super();

    this.itemArray = this.container.getItemArray();

  }

  ionViewDidLoad() {

  }


}
