import {Component} from '@angular/core';
import {FormBuilder, Validators, FORM_DIRECTIVES, ControlGroup, Control} from '@angular/common';
import { RegisterComponent } from './register.component';

@Component({
    selector: 'login-form',
    templateUrl: '/template/form/auth/loginform.html',
    directives: [FORM_DIRECTIVES, RegisterComponent]
})
export class LoginComponent {
    login_title = 'Login Form';
    login_loginId: Control;
    login_password: Control;

    loginForm: ControlGroup;

    constructor(private  formBuilder: FormBuilder){
        this.login_loginId = new Control('', Validators.compose([Validators.required]));
        this.login_password = new Control('', Validators.compose([Validators.required, Validators.minLength(4)]));

        this.loginForm = this.formBuilder.group({
            login_loginId: this.login_loginId,
            login_password: this.login_password
        });
    }

    saveUser(){

    }
}
