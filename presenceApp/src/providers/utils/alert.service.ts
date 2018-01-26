import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Injectable()
export class AlertService {
    constructor(private alertCtrl: AlertController) { }

    showAlert(title, message) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['Ok']
        });
        alert.present();
    }

    confirmAlert(title, message) {
        let alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: 'No',
                    role: 'no',
                    handler: () => {
                        console.log('no');
                    }
                },
                {
                    text: 'Yes',
                    handler: () => {
                        console.log('yes');
                    }
                }
            ]
        });
        alert.present();
    }

    alertCallBack(title, message): Promise<boolean> {
        return new Promise((resolve, reject) => {
            const confirm = this.alertCtrl.create({
                title,
                message,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            confirm.dismiss().then(res => resolve(false));
                            return false;
                        }
                    },
                    {
                        text: 'Yes',
                        handler: () => {
                            confirm.dismiss().then(() => resolve(true));
                            return false;
                        }
                    }

                ]
            })

            return confirm.present();
        })
    }
}