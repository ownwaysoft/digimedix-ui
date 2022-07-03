import { AbstractControl } from '@angular/forms';

export const emailPattern = (control: AbstractControl | any): object | null => {
    const emailString: string = control.value;
    const emailPattern = "^([a-zA-Z0-9]+)+[\._-]?[a-zA-Z0-9']+@[a-zA-Z0-9-_]+[\._-]?[a-zA-Z0-9]+([.]+[a-zA-Z]{2,3}){1,2}$";
    const regExp = new RegExp(emailPattern);
    let validatorObj :any;
    if (control.errors) {
        if (control.errors.required && control.errors.email) {
            validatorObj = (regExp.test(emailString)) ? null : { email: true };
        }
        else if (control.errors.email && emailString == "") {
            validatorObj = null;
        }
        else if (control.errors.email && emailString != "") {
            validatorObj = (regExp.test(emailString)) ? null : { email: true };
        }
    }
    return validatorObj;
}