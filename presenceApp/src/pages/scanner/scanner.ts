import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { ToastService } from '../../providers/utils/toast.service';
import { AlertService } from '../../providers/utils/alert.service';
import { ScannerService } from '../../providers/utils/scanner.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';



@IonicPage()
@Component({
  selector: 'page-scanner',
  templateUrl: 'scanner.html'
})
export class ScannerPage {

  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastService,
    private alertCtrl: AlertService,
    private scannerCtrl: ScannerService,
    private barcodeScanner: BarcodeScanner
  ) { }

  scan() {

    const options = {
      preferFrontCamera: false,
      showFlipCameraButton: true,
      showTorchButton: true,
      torchOn: false,
      prompt: "Place a barcode inside the scan area", // Android
      resultDisplayDuration: 500,
      formats: "QR_CODE,PDF_417",
      orientation: "portrait",
      disableAnimations: true, // iOS
      disableSuccessBeep: false // iOS
    };

    this.barcodeScanner.scan(options).then((barcodeData: any) => {
      this.scannerCtrl.postData(barcodeData.idAluno, barcodeData.idDisciplina);
      this.toastCtrl.presentToast("The check in has been succeeded")
    }, (err) => {
      this.toastCtrl.presentToast("Unable to scan");
    });
  }

  scanTest() {
    this.scannerCtrl.postData("007", "1").subscribe(res => this.toastCtrl.presentToast("The check in test has been succeeded"));
  }

}
