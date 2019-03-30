import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../providers/login.service';

@Component({
    selector: 'app-forgot-pwd-dialog',
    templateUrl: './forgot-pwd-dialog.component.html',
    styleUrls: ['./forgot-pwd-dialog.component.scss']
})
export class ForgotPwdDialogComponent implements OnInit {

    forgotPwdForm: FormGroup;

    constructor(
        public dialogRef: MatDialogRef<ForgotPwdDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public loginService: LoginService
    ) {
        this.forgotPwdForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email])
        });
    }

    ngOnInit() {

    }

    forgotPwd() {
        if (this.forgotPwdForm.invalid) {
            return;
        }

        let values = this.forgotPwdForm.value;
        this.loginService.forgotPassword(values.email).subscribe(res => {
            this.dialogRef.close();
        })
    }

}
