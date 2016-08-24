import {Component} from '@angular/core';
import { LoginComponent } from './auth/controller/login.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        	<login-form></login-form>
    `,
    directives: [LoginComponent]
})
export class AppComponent {
    title = 'Tour of Heroes2';
}
