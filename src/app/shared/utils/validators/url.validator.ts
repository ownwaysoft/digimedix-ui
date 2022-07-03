import { AbstractControl } from '@angular/forms';

export const urlPattern = (control: AbstractControl): object | null => {
    const urlString: string = control.value;
    const regExp = new RegExp(/^(https?:\/\/(www\.)?)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,10}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?$/gm);
    if (urlString == '') {
        return null;
    }
    else {
        return (regExp.test(urlString)) ? null : { invalid: true };
    }
}