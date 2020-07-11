import {  AbstractControl, Validators } from '@angular/forms';

export class CustomValidation {
    static noSpace(control: AbstractControl): Validators | null {
        // tslint:disable-next-line: ban-types
        if ((control.value as String).indexOf(' ') > 0) {
            return {noSpace : true};
        } else {
            return null;
        }
    }

    static CapitalLatter(control: AbstractControl) {
        // tslint:disable-next-line: ban-types
        if ((control.value as String).indexOf[1] !== '[A-Z]') {
            return {CapitalLatter : true};
        } else {
            return null;
        }
    }
}
