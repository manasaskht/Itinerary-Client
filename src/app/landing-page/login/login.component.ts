import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { StorageHelper } from 'src/app/shared/utilities/storage.helper';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;

    constructor(
        private router: Router
    ) {
        this.loginForm = new FormGroup({
            email: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required])
        });
    }

    ngOnInit() {
    }

    login() {
        if (this.loginForm.invalid)
            return;

        let loginValues = this.loginForm.value;
        if (loginValues.email === 'admin@admin.com' && loginValues.password === 'admin') {
            StorageHelper.getInstance().userInfo = { token: 'abcd' };
            this.router.navigate(['/dashboard']);
        }
    }

}
