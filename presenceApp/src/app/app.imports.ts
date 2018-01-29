// Providers
import { ToastService } from '../providers/utils/toast.service';
import { AlertService } from '../providers/utils/alert.service';
import { ScannerService } from '../providers/utils/scanner.service';


// Native Providers
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

// Modules
import { HomePageModule } from '../pages/home/home.module';
import { ReportPageModule } from '../pages/report/report.module';
import { LoginPageModule } from '../pages/login/login.module';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { ScannerPageModule } from '../pages/scanner/scanner.module';

// Native Modules
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from 'ionic-angular/module';
import { MyApp } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';



export const PROVIDERS = [
    ToastService,
    AlertService,
    ScannerService
];

export const NATIVEPROVIDERS = [
    StatusBar,
    SplashScreen,
    Camera,
    HttpClient,
    BarcodeScanner
]

export const MODULES = [
    HomePageModule,
    ReportPageModule,
    LoginPageModule,
    ProfilePageModule,
    ScannerPageModule,
    HttpClientModule
]

export const NATIVEMODULES = [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
]