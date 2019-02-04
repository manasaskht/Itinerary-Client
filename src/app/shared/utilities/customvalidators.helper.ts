import { ValidatorFn, AbstractControl, FormControl } from '@angular/forms';

export namespace CustomValidators {

    export function equalValueValidator(comparisonFormControl: AbstractControl): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const forbidden = control.value !== comparisonFormControl.value;
            return forbidden ? { 'notEqual': { value: control.value } } : null;
        };
    }
}