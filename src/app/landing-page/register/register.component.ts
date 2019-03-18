import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/utilities/customvalidators.helper';
import { Utilities } from 'src/app/shared/utilities/utils.helper';
import { RegisterService } from '../providers/register.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;

    constructor(
        private registerService: RegisterService,
        private toastr: ToastrService
    ) {
        this.registerForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.pattern(Utilities.emailPattern)]),
            password: new FormControl('', [Validators.required, Validators.pattern(Utilities.passwordPattern)]),
            confirmPwd: new FormControl('', [Validators.required]),
            firstName: new FormControl('', [Validators.required]),
            lastName: new FormControl('', [Validators.required])
        });
        this.registerForm.get('confirmPwd').setValidators([
            Validators.required,
            CustomValidators.equalValueValidator(this.registerForm.get('password'))
        ]);
        this.registerForm.get('password').valueChanges.subscribe(value => {
            this.registerForm.get('confirmPwd').reset();
        });
    }

    register() {
        if (this.registerForm.invalid)
            return;

        let registerValues = this.registerForm.value;
        this.registerService.registerUser(
            registerValues.firstName,
            registerValues.lastName,
            registerValues.email,
            registerValues.password,
            registerValues.confirmPwd
        ).subscribe((res: any) => {
            this.toastr.success(res.message)
            this.registerForm.reset();
        })
    }



    ngOnInit() {
    }

}
