import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// import { StopWatchWrapperComponent } from '../components/stop-watch-wrapper/stop-watch-wrapper';

import { ComponentsModule } from '../components/components.module';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        // StopWatchWrapperComponent
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        ComponentsModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
