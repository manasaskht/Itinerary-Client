import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { StorageHelper } from 'src/app/shared/utilities/storage.helper';
import { Utilities } from 'src/app/shared/utilities/utils.helper';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../providers/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;

    constructor(
        private router: Router,
        private loginService: LoginService
    ) {
        this.loginForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.pattern(Utilities.emailPattern)]),
            password: new FormControl('', [Validators.required])
        });
        this.loginForm.controls.email.hasError('required')
    }

    ngOnInit() {
    }

    login() {
        if (this.loginForm.invalid)
            return;

        let loginValues = this.loginForm.value;
        this.loginService.userLogin(loginValues.email, loginValues.password)
            .subscribe(res => {
                StorageHelper.getInstance().userInfo = res;
                this.router.navigate(['/dashboard']);
            });
        // if (loginValues.email === 'admin@admin.com' && loginValues.password === 'admin') {
        //     StorageHelper.getInstance().userInfo = { token: 'abcd' };
        //     this.router.navigate(['/dashboard']);
        // } else {
        //     this.toastrService.error('Invalid Username or Password. \nUse email as "admin@admin.com" and password as "admin"', 'Login Error');
        // }
    }

}
