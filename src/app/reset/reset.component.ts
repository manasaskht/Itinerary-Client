import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from '../shared/utilities/customvalidators.helper';
import { ResetService } from './providers/reset.service';
import { ActivatedRoute, Router } from '@angular/router';
import { flatMap } from 'rxjs/operators';
import { Route } from '@angular/compiler/src/core';
import { Utilities } from '../shared/utilities/utils.helper';
import { StorageHelper } from '../shared/utilities/storage.helper';

@Component({
    selector: 'app-reset',
    templateUrl: './reset.component.html',
    styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

    resetForm: FormGroup;

    constructor(
        private resetService: ResetService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {
        StorageHelper.getInstance().clear();
        this.resetForm = new FormGroup({
            password: new FormControl('', [Validators.required, Validators.pattern(Utilities.passwordPattern)]),
            confirmPwd: new FormControl('')
        });
        this.resetForm.controls.confirmPwd.setValidators(
            [Validators.required, CustomValidators.equalValueValidator(this.resetForm.controls.password)]
        );
        this.resetForm.controls.password.valueChanges.subscribe(res => {
            this.resetForm.controls.confirmPwd.setValue('');
        });
    }

    ngOnInit() {

    }

    resetPassword() {
        if (this.resetForm.invalid) {
            return;
        }

        let values = this.resetForm.value;
        this.activatedRoute.params.pipe(flatMap(params => {
            return this.resetService.resetPassword(values.password, values.confirmPwd, params.token);
        })).subscribe(res => {
            this.router.navigate(['/landing']);
        })

    }

}
