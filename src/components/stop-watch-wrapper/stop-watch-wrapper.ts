import { Component } from '@angular/core';

/**
 * Generated class for the CounterWrapperComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'stop-watch-wrapper',
    templateUrl: 'stop-watch-wrapper.html'
})
export class StopWatchWrapperComponent {

    message: string;

    constructor() {
        console.log('Hello StopWatchWrapperComponent Component');
    }

    handleMessageEvent(ev) {
        this.message = ev.detail;
        console.log('Received event from StopWatch component: ', this.message);
    }

}
