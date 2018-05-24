import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Loading, LoadingController, Toast, ToastController} from "ionic-angular";

@Injectable()
export class LlToastProvider {

  constructor(public loadingCtrl: LoadingController,
              public toastCtrl: ToastController) {}

  public showLoading(message: string): Loading {
    let loader = this.loadingCtrl.create({
      content: message,
      dismissOnPageChange: true
    });
    loader.present();
    return loader;
  }

  public showToast(message: string): Toast {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });
    toast.present();
    return toast;
  }


}
