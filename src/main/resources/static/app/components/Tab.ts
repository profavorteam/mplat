import {Component, Input} from '@angular/core';
import {Tabs} from './Tabs';

@Component({
    selector: 'tab',
    template: `
     <li role="presentation">
            <ng-content></ng-content>
    </li>
   
  `
})
export class Tab {
    active: boolean;
    @Input() tabTitle: string;

    constructor(tabs:Tabs) {
        tabs.addTab(this);
    }
}