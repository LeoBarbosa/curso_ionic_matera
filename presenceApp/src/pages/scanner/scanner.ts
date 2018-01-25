import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { ToastService } from '../../providers/utils/toast.service';
import { AlertService } from '../../providers/utils/alert.service';

@IonicPage()
@Component({
  selector: 'page-scanner',
  templateUrl: 'scanner.html'
})
export class ScannerPage {

  constructor(public navCtrl: NavController, private toastCtrl: ToastService, private alertCtrl: AlertService ) {}

  scan() {
    this.toastCtrl.presentToast('No Scanner Implemented');
    this.alertCtrl.showAlert('Error', 'You not be able to scan anything!');
    this.alertCtrl.confirmAlert('Help us', 'Do you wanna report this error?');
  }

}
