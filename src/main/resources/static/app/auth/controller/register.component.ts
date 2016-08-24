import {Component} from '@angular/core';
import {FormBuilder, Validators, FORM_DIRECTIVES, ControlGroup, Control} from '@angular/common';
import {ValidationService} from '../../services/validation.service'

@Component({
    selector: 'register-form',
    templateUrl: '/template/form/auth/registerform.html',
    directives: [FORM_DIRECTIVES]
})
export class RegisterComponent {
    register_title = 'Register Form';
    register_loginId:Control;
    register_password:Control;
    register_passwordConfirm:Control;
    register_email:Control;
    register_nickname:Control;
    register_birthday:Control;
    register_command:Control;

    registerForm:ControlGroup;

    tabIndex:number;

    constructor(private  formBuilder:FormBuilder) {
        this.register_loginId = new Control('', Validators.compose([Validators.required]));
        this.register_password = new Control('', Validators.compose([Validators.required, Validators.minLength(4)]));
        this.register_passwordConfirm = new Control('', Validators.compose([Validators.required, Validators.minLength(4)]));
        this.register_email = new Control('', Validators.compose([Validators.required, ValidationService.emailValidator]));
        this.register_nickname = new Control('', Validators.compose([Validators.required]));
        this.register_birthday = new Control('', Validators.compose([Validators.minLength(8)]));
        this.register_command = new Control('', Validators.compose([Validators.minLength(10)]));

        this.registerForm = this.formBuilder.group({
            register_loginId: this.register_loginId,
            register_password: this.register_password,
            register_passwordConfirm: this.register_passwordConfirm,
            register_email: this.register_email,
            register_nickname: this.register_nickname,
            register_birthday: this.register_birthday,
            register_command: this.register_command
        }, {
            validator: ValidationService.matchingPasswords('register_password', 'register_passwordConfirm')
        });
    }

    prev(){

    }
    next() {

    }

    saveUser() {

    }

    selectTab(index: number){
        this.tabIndex = index;
        alert(index);
    }
}

