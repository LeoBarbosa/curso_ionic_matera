import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { MODULES, NATIVEPROVIDERS, NATIVEMODULES, PROVIDERS } from './app.imports';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    MODULES,
    NATIVEMODULES,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    NATIVEPROVIDERS,
    PROVIDERS,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
