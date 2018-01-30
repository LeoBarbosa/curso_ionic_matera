import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import { isUndefined } from 'ionic-angular/util/util';

@Injectable()
export class AuthService {
	currentUser: Object;

	constructor (public http: HttpClient, private storage: Storage) {}
	public login(credentials) {
		if (credentials.login === null || credentials.password === null) {
			return Observable.throw("Please insert credentials");
		}else {
			return Observable.create(observer => {
				let access: Boolean;
				const uri = "https://curso-ferias.herokuapp.com";
				this.http
					.get(
						`${uri}/usuario?login=${
							credentials.login
						}&senha=${credentials.password}`
					)
					.subscribe(res => {
						if(res[0]) {
							this.currentUser = res[0];
							access = true;
							localStorage.setItem("token", "Ok");
							this.storage.set("currentUser", this.currentUser);
							console.log(this.currentUser);
						}else {
							access = false;
						}

						if(!isUndefined(access)){
							observer.next(access);
							observer.complete();
						}
					})
			})
		}
	}
}