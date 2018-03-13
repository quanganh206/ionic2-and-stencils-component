# ionic2-and-stencils-component

Sample project that shows an integration of [Stop Watch demo web component build with StencilJS](https://github.com/quanganh206/stencil-stop-watch) 
in Ionic Demo App.

## Running

Before you go through this example, you should have at least a basic understanding of Ionic concepts. You must also already have Ionic installed on your machine.

* Test in localhost:

```bash
git clone https://github.com/quanganh206/ionic2-and-stencils-component.git
```

To run it, cd into `ionic2-and-stencils-component` and run:

```bash
npm install
ionic serve
```

## Integrate Web Component in Ionic

Steps

* In your Ionic project copy web componet build folder in src/assets/lib (for example).

* In src/app/app.module.ts

```bash
import { CUSTOM_ELEMENTS_SCHEMA } from ‘@angular/core’;
```

* Add 

```bash
schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
```

* Example

```bash
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StopWatchWrapperComponent } from '../components/stop-watch-wrapper/stop-watch-wrapper';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        StopWatchWrapperComponent
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp)
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
```

* Use your web component in page (for example home.ts)

```bash
<ion-header>
    <ion-navbar>
        <ion-title>
            Stencil WC Ionic
        </ion-title>
    </ion-navbar>
</ion-header>

<ion-content padding>
    <stop-watch-wrapper>
        <stop-watch-box></stop-watch-box>
    </stop-watch-wrapper>
</ion-content>
```

## Requirements

* [Node.js](http://nodejs.org/)
* [Ionic Cordova](https://ionicframework.com/docs/intro/installation/)