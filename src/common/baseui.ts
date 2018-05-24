import {Loading, LoadingController, Toast, ToastController} from "ionic-angular";

// abstract 抽象类
export abstract class Baseui {

  constructor() {

  }

  protected showLoading(loadingCtrl: LoadingController, message: string): Loading {
    let loader = loadingCtrl.create({
      content: message,
      dismissOnPageChange: true
    });
    loader.present();
    return loader;
  }

  protected showToast(toastCtrl: ToastController, message: string): Toast {
    let toast = toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });
    toast.present();
    return toast;
  }

}
