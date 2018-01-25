// Providers
import { ToastService } from '../providers/utils/toast.service';
import { AlertService } from '../providers/utils/alert.service';

// Native Providers
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Modules
import { HomePageModule } from '../pages/home/home.module';
import { ReportPageModule } from '../pages/report/report.module';
import { LoginPageModule } from '../pages/login/login.module';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { ScannerPageModule } from '../pages/scanner/scanner.module';

// Native Modules
import { BrowserModule } from '@angular/platform-browser';

export const PROVIDERS = [
    ToastService,
    AlertService
];

export const NATIVEPROVIDERS = [
    StatusBar,
    SplashScreen,
]

export const MODULES = [
    HomePageModule,
    ReportPageModule,
    LoginPageModule,
    ProfilePageModule,
    ScannerPageModule
]

export const NATIVEMODULES = [
    BrowserModule
]