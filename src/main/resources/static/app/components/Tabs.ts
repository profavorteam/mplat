/**
 * Created by 치국 on 2016-07-30.
 */
import {Component, Input} from '@angular/core';
import {Tab} from './Tab';

@Component({
    selector: 'tabs',
    template: `
    <ul class="nav nav-tabs" role="tablist">   
        <li *ngFor="let tab of tabs" (click)="selectTab(tab)">
            {{tab.tabTitle}}
          </li>        
    </ul>
    <ng-content></ng-content>
  `
})

export class Tabs {
    tabs: Tab[] = [];

    selectTab(tab: Tab) {
        this.tabs.forEach((tab) => {
            tab.active = false;
        });
        tab.active = true;
    }

    addTab(tab: Tab) {
        if (this.tabs.length === 0) {
            tab.active = true;
        }
        this.tabs.push(tab);
    }

}