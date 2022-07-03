import { AbstractControl } from '@angular/forms';

export function trimValidator(control: AbstractControl) {
  let emptyvalue = control.value.toString()||'';
  if (emptyvalue !== '' && !emptyvalue.trim().length) 
  {
    return { trimValue: true };
  }
  return null;
}
