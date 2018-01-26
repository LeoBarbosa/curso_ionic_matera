import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { Camera } from '@ionic-native/camera';
import { ToastService } from '../../providers/utils/toast.service';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  private profilePicture: string;

  user = {
    name: 'Leonardo Barbosa de Oliveira',
    image: '' //'https://goo.gl/Gm28yk'
  }

  constructor(
    public navCtrl: NavController,
    private camera: Camera,
    private toastService: ToastService,
    private storage: Storage
  ) {}

  ngOnInit() {}

  openGalery():void {
    let cameraOption = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      quality: 100,
      targetWidth: 100,
      targetHeight: 100,
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true
    };
    this.camera
      .getPicture(cameraOption)
      .then(
        imgData => this.updateImage(imgData),
        err => this.toastService.presentToast("Error: " + err)
      )
    
  }

  updateImage(value) {
    this.profilePicture = "data:image/jpeg;base64," + value;
    //Option to add to localStorage
    localStorage.setItem("imageUrl", this.profilePicture);
    //Option to add to ionic's storage
    this.storage.set("imageUrl", this.profilePicture);
    this.user.image = this.profilePicture;
  }

}
