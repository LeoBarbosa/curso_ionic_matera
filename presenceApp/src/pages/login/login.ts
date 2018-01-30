import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { AuthService } from '../../providers/utils/auth.service';
import { ToastService } from '../../providers/utils/toast.service';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
	selector: 'page-login',
	templateUrl: 'login.html'
})
export class LoginPage {

	public credentials = { login: '', password: '' };

	constructor(public navCtrl: NavController, private authCtrl: AuthService, private toastCtrl: ToastService) { }

	ngOnInit() {
		let token = localStorage.getItem('token');
		if (token) {
			this.navCtrl.setRoot("HomePage");
		}
	}

	login() {
		this.authCtrl.login(this.credentials).subscribe(res => {
			if (res) {
				this.toastCtrl.presentToast('Logged!')
				this.navCtrl.setRoot("HomePage");
			} else {
				this.toastCtrl.presentToast('Please insert your correct credentials!')
			}
		});
	}
}
