import { HttpParams } from '@angular/common/http';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonPaginationConfig } from './enums.utils';
import { emailPattern } from './validators';
import { formConfigs } from './variables.utils';

const cryptoSecretKey = 'hsbdkdshdG45897GUJHH8798sddf';

const formatColumn = (column: string): string => {
  const col: any = column.charAt(0).toUpperCase() + column.substring(1);
  return col.match(/[A-Z][a-z]+|[0-9]+/g).join(' ');
};

/**
   * It prepares the Request HttpParams .
   * @param pageIndex The optional parameter of type string.
   * @param pageSize The optional parameter of type string.
   * @param otherParams The optional parameter of type ny.
   * @return The HttpParams.
   */
const prepareGetRequestHttpParams = (pageIndex?: string, pageSize?: string, ...otherParams: any): HttpParams => {
  let params = new HttpParams();
  params = params.append('pageIndex', pageIndex ? pageIndex : CommonPaginationConfig.defaultPageIndex);
  params = params.append('maximumRows', pageSize ? pageSize : CommonPaginationConfig.defaultPageSize);
  if (otherParams && otherParams[0]) {
    otherParams.forEach((param: any) => {
      Object.keys(param).forEach((key) => {
        params = params.append(key, param[key]);
      });
    });
  }
  return params;
};

const prepareRequiredHttpParams = (...otherParams: any): HttpParams => {
  let params: any = new HttpParams();
  otherParams.forEach((param: any) => {
    Object.keys(param).forEach((key) => {
      if (param[key] === '') {
        params[key] = undefined;
      } else {
        params = params.append(key, param[key]);
      }
    });
  });
  return params;
};

const generateQueryParams = (queryParams: any) => {
  const queryParamsString = new HttpParams({ fromObject: queryParams }).toString();
  return '?' + queryParamsString;
}


const setRequiredValidator = (formGroup: FormGroup, formControlNames: Array<string>): FormGroup => {
  // if (formControlNames.length === 0) { return; }
  formControlNames.forEach((formControlName: string) => {
    formGroup.controls[formControlName].setValidators(Validators.compose((formControlName.toLowerCase().includes('email') ||
      formControlName.toLowerCase().includes('notificationto')) ?
      [Validators.required, Validators.email, emailPattern] :
      // formControlName.toLowerCase().includes('cancelreasonname') ? [Validators.required, trimValidator] :
      [Validators.required]));
    formGroup.controls[formControlName].updateValueAndValidity({ emitEvent: false, onlySelf: true });
  });
  formGroup.updateValueAndValidity({ emitEvent: false, onlySelf: true });
  return formGroup;
};

const setEmailValidator = (formGroup: FormGroup, formControlNames: Array<string>): FormGroup => {
  // if (formControlNames.length === 0) { return; }
  formControlNames.forEach((formControlName: string) => {
    const control = formGroup.controls[formControlName];
    const existingValidators = control.validator;
    formGroup.controls[formControlName].setValidators(Validators.compose([existingValidators, Validators.email, emailPattern]));
    formGroup.controls[formControlName].updateValueAndValidity({ emitEvent: false, onlySelf: true });
  });
  formGroup.updateValueAndValidity({ emitEvent: false, onlySelf: true });
  return formGroup;
};



const setMinMaxLengthValidator = (formGroup: FormGroup, formControlNames: Array<string>): FormGroup => {
  // if (formControlNames.length === 0) { return; }
  let minLength: number;
  let maxLength: number;
  formControlNames.forEach((formControlName: string) => {
    const name: string = formControlName.toLowerCase();
    const control = formGroup.controls[formControlName];
    const existingValidators = control.validator;
    switch (true) {
      case (name.includes('zip') || name.includes('postal')):
        minLength = maxLength = formConfigs.postalCodeMaxLength;
        break;
      case ((name.includes('number') || name.includes('contact')) &&
        !name.includes('phone') && !name.includes('home') && !name.includes('office') && !name.includes('street')):
        minLength = maxLength = formConfigs.phoneNumberMaxLength;
        break;
      case (name.includes('streetno') || name.includes('streetname')):
        minLength = formConfigs.streetNumberMinLength;
        maxLength = formConfigs.streetNumberMaxLength;
        break;
      case (name.includes('streetname')):
        minLength = formConfigs.streetNameMinLength;
        maxLength = formConfigs.streetNameMaxLength;
        break;
      case (name.includes('firstname')):
        minLength = formConfigs.firstNameMinLength;
        maxLength = formConfigs.firstNameMaxLength;
        break;
      case (name.includes('surname') || name.includes('lastname')):
        minLength = formConfigs.lastNameMinLength;
        maxLength = formConfigs.lastNameMaxLength;
        break;
      case (name.includes('buildingno') || name.includes('buildingnumber')):
        minLength = formConfigs.buildingNumberMinLength;
        maxLength = formConfigs.buildingNumberMaxLength;
        break;
      case (name.includes('buildingname')):
        minLength = formConfigs.buildingNameMinLength;
        maxLength = formConfigs.buildingNameMaxLength;
        break;
    }
    formGroup.controls[formControlName].setValidators(Validators.compose([existingValidators, Validators.minLength(minLength), Validators.maxLength(maxLength)]));
    formGroup.controls[formControlName].updateValueAndValidity({ emitEvent: false, onlySelf: true });
  });
  formGroup.updateValueAndValidity({ emitEvent: false, onlySelf: true });
  return formGroup;
};

const removeAllFormValidators = (formGroup: FormGroup | any): FormGroup => {
  Object.keys(formGroup.controls).forEach(key => {
    if (formGroup.get(key) instanceof FormControl) {
      formGroup.get(key).clearValidators();
      formGroup.get(key).updateValueAndValidity({ emitEvent: false, onlySelf: true });
    } else if (formGroup.get(key) instanceof FormArray) {

    }
  });
  return formGroup;
};

const clearFormControlValidators = (formGroup: FormGroup | any, formControlNames: Array<string>): FormGroup => {
  formControlNames.forEach((name: string) => {
    if (formGroup.get(name) instanceof FormControl) {
      formGroup.get(name).clearValidators();
      formGroup.get(name).updateValueAndValidity({ emitEvent: false, onlySelf: true });
    } else if (formGroup.get(name) instanceof FormArray) {

    }
  });
  return formGroup;
};

const addFormControls = (formGroup: FormGroup | any, formControlNames: Array<string | any> | object): FormGroup => {
  const loopableVariable = (formControlNames instanceof Array) ? formControlNames : Object.keys(formControlNames);
  loopableVariable.forEach((name: string | any) => {
    const controlName = name.hasOwnProperty('controlName') ? name['controlName'] : name;
    if (name.hasOwnProperty('controlName')) {
      if (formGroup.controls.hasOwnProperty(name['controlName'])) {
        formGroup.get(controlName).setValue(name['defaultValue'], { disabled: name['isDisabled'] ? name['isDisabled'] : false });
      }
      else {
        formGroup.addControl(controlName, new FormControl({ value: name['defaultValue'], disabled: name['isDisabled'] }));
      }
      formGroup.get(controlName).updateValueAndValidity({ emitEvent: false, onlySelf: true });
    } else {
      formGroup.addControl(controlName, new FormControl((null)));
    }
    formGroup.updateValueAndValidity({ emitEvent: false, onlySelf: true });
  });
  return formGroup;
};

const removeFormControls = (formGroup: FormGroup | any, formControlNames: Array<string> | object): FormGroup => {
  const loopableVariable = (formControlNames instanceof Array) ? formControlNames : Object.keys(formControlNames);
  loopableVariable.forEach((name: string) => {
    if (formGroup.get(name) && formGroup.get(name) instanceof FormControl) {
      formGroup.removeControl(name);
      formGroup.updateValueAndValidity({ emitEvent: false, onlySelf: true });
    } else if (formGroup.get(name) instanceof FormArray) {
      // let formArrayFormControls=formGroup.get(name) as FormArray;
      // formArrayFormControls.controls.forEach((formArrayControl:string)=>{
      //     formGroup.removeControl(formArrayControl);
      //     formGroup.updateValueAndValidity({ emitEvent: false, onlySelf: true });
      // })
    }
  });
  return formGroup;
};

interface IDefaultValuesForFormControls {
  formControlName: string;
  value?: string;
  isRequired?: boolean;
  shouldRemoveAllValidators?: boolean;
}

const enableFormControls = (formGroup: FormGroup | any, formControlNames: Array<string>): FormGroup => {
  formControlNames.forEach((name: string) => {
    if (formGroup.get(name) instanceof FormControl) {
      formGroup.get(name).enable({ emitEvent: false, onlySelf: true });
      formGroup.updateValueAndValidity({ emitEvent: false, onlySelf: true });
    } else if (formGroup.get(name) instanceof FormArray) {
    }
  });
  return formGroup;
};

const disableFormControls = (formGroup: FormGroup | any, formControlNames: Array<string> | object): FormGroup => {
  const loopableVariable = (formControlNames instanceof Array) ? formControlNames : Object.keys(formControlNames);
  loopableVariable.forEach((name: string) => {
    if (formGroup.get(name) instanceof FormControl) {
      formGroup.get(name).disable({ emitEvent: false, onlySelf: true });
      formGroup.updateValueAndValidity({ emitEvent: false, onlySelf: true });
    } else if (formGroup.get(name) instanceof FormArray) {
      // let formArrayFormControls=formGroup.get(name) as FormArray;
      // formArrayFormControls.controls.forEach((formArrayControl:string)=>{
      //     formGroup.removeControl(formArrayControl);
      //     formGroup.updateValueAndValidity({ emitEvent: false, onlySelf: true });
      // })
    }
  });
  return formGroup;
};


// for development purpose

const isString = (val: boolean): boolean => typeof val === 'string';


const capitalizeFirstLetterOfEachString = (ngControlName: string): string => {
  return ngControlName = ngControlName.toLowerCase()
    .split(' ')
    .map((c) => c.charAt(0).toUpperCase() + c.substring(1))
    .join(' ');
}

const removeFormControlError = (formGroup: FormGroup | any, removableErrorKey?: string, errorRemovableFormControlName?: string): FormGroup => {
  // find and deletes the given formcontrol errors with the given error key
  if (removableErrorKey && errorRemovableFormControlName && formGroup.controls[errorRemovableFormControlName].errors &&
    formGroup.controls[errorRemovableFormControlName].errors[removableErrorKey]) {
    delete formGroup.controls[errorRemovableFormControlName].errors[removableErrorKey];
    formGroup.controls[errorRemovableFormControlName].updateValueAndValidity();
    formGroup.updateValueAndValidity();
  }
  // find and deletes all formcontrol errors with the given error key
  else if (removableErrorKey && !errorRemovableFormControlName) {
    Object.keys(formGroup.controls ? formGroup.controls : {}).forEach((formControlName: string) => {
      if (removableErrorKey !== 'minlength' && formGroup.controls[formControlName].errors &&
        formGroup.controls[formControlName].errors[removableErrorKey]) {
        delete formGroup.controls[formControlName].errors[removableErrorKey];
        if (formGroup.controls[formControlName].errors && !formGroup.controls[formControlName].errors[removableErrorKey]) {
          formGroup.controls[formControlName].setErrors(null);
        }
      }
      else if (removableErrorKey == 'minlength' && formGroup.controls[formControlName].value &&
        formGroup.controls[formControlName].errors && formGroup.controls[formControlName].errors[removableErrorKey]) {
        if (formGroup.controls[formControlName].errors && formGroup.controls[formControlName].value.replace(/\s/g, "").length == 9 ||
          formGroup.controls[formControlName].value.replace(/\s/g, "").length == 10) {
          delete formGroup.controls[formControlName].errors[removableErrorKey];
        }
        if (formGroup.controls[formControlName].errors && !formGroup.controls[formControlName].errors[removableErrorKey]) {
          formGroup.controls[formControlName].setErrors(null);
        }
      }
    });
  }
  // find and deletes all formcontrol and all errors with the additional logic inclusion of mobile number minlength
  else if (!removableErrorKey && !errorRemovableFormControlName) {
    Object.keys(formGroup.controls ? formGroup.controls : {}).forEach((formControlName: string) => {
      Object.keys(formGroup.controls[formControlName].errors ? formGroup.controls[formControlName].errors : {}).forEach((errorKey: string) => {
        if (errorKey !== 'minlength' && formGroup.controls[formControlName].errors && formGroup.controls[formControlName].errors[errorKey]) {
          delete formGroup.controls[formControlName].errors[errorKey];
          if (formGroup.controls[formControlName].errors && !formGroup.controls[formControlName].errors[errorKey]) {
            formGroup.controls[formControlName].setErrors(null);
          }
        }
        else if (errorKey == 'minlength' && formGroup.controls[formControlName].value) {
          if (formGroup.controls[formControlName].errors && formGroup.controls[formControlName].value.replace(/\s/g, "").length == 9 ||
            formGroup.controls[formControlName].value.replace(/\s/g, "").length == 10) {
            delete formGroup.controls[formControlName].errors[errorKey];
          }
          if (formGroup.controls[formControlName].errors && !formGroup.controls[formControlName].errors[errorKey]) {
            formGroup.controls[formControlName].setErrors(null);
          }
        }
      });
    });
  }
  // find and deletes the given formcontrol and all errors with the additional logic inclusion of mobile number minlength
  else if (!removableErrorKey && errorRemovableFormControlName) {
    Object.keys(formGroup.controls[errorRemovableFormControlName].errors ? formGroup.controls[errorRemovableFormControlName].errors : {}).forEach((errorKey: string) => {
      if (errorKey !== 'minlength' && formGroup.controls[errorRemovableFormControlName].errors) {
        delete formGroup.controls[errorRemovableFormControlName].errors[errorKey];
        if (formGroup.controls[errorRemovableFormControlName].errors && !formGroup.controls[errorRemovableFormControlName].errors[errorKey]) {
          formGroup.controls[errorRemovableFormControlName].setErrors(null);
        }
      }
      else if (errorKey == 'minlength' && formGroup.controls[errorRemovableFormControlName].value) {
        if (formGroup.controls[errorRemovableFormControlName].errors && formGroup.controls[errorRemovableFormControlName].value.replace(/\s/g, "").length == 9 ||
          formGroup.controls[errorRemovableFormControlName].value.replace(/\s/g, "").length == 10) {
          delete formGroup.controls[errorRemovableFormControlName].errors[errorKey];
        }
        if (formGroup.controls[errorRemovableFormControlName].errors && !formGroup.controls[errorRemovableFormControlName].errors[errorKey]) {
          formGroup.controls[errorRemovableFormControlName].setErrors(null);
        }
      }
    });
  }
  return formGroup;
}



// Compare max value validator
const setMaxValidatorWithValue = (formGroup: FormGroup, formControlNames: Array<{}>): FormGroup => {
  // if (formControlNames.length === 0) { return; }
  formControlNames.forEach((formControlName: object | any) => {
    const control = formGroup.controls[formControlName['formControlName']];
    const existingValidators = control.validator;
    control.setValidators(Validators.compose([existingValidators, Validators.max(formControlName['maxValue'])]));
  });
  formGroup.updateValueAndValidity();
  return formGroup;
};

// Compare min value validator
const setMinValidatorWithValue = (formGroup: FormGroup, formControlNames: Array<{}>): FormGroup => {
  // if (formControlNames.length === 0) { return; }
  formControlNames.forEach((formControlName: object | any) => {
    const control = formGroup.controls[formControlName['formControlName']];
    const existingValidators = control.validator;
    control.setValidators(Validators.compose([existingValidators, Validators.min(formControlName['minValue'])]));
  });
  formGroup.updateValueAndValidity();
  return formGroup;
};

// for development only
const autofillFormFieldValues = (formGroup: FormGroup): FormGroup => {
  Object.keys(formGroup.controls).forEach((key) => {
    if (formGroup.controls[key] instanceof FormGroup) {
      let nestedFormGroup = formGroup.controls[key] as FormGroup;
      Object.keys(nestedFormGroup.controls).forEach((nestedFormControlKey) => {
        if (nestedFormGroup.controls[nestedFormControlKey] instanceof FormControl &&
          nestedFormGroup.controls[nestedFormControlKey].enabled) {
          let nestedFormControlName = nestedFormControlKey.toLowerCase();
          switch (true) {
            case nestedFormControlName.includes('name'):
              nestedFormGroup.controls[nestedFormControlKey].setValue(randomNameOrNumberGenerator('name'));
              break;
            case (nestedFormControlName.includes('email')):
              nestedFormGroup.controls[nestedFormControlKey].setValue(randomNameOrNumberGenerator('name') + "@gmail.in");
              break;
            case ((nestedFormControlName.includes('number') || nestedFormControlName.includes('mobile') ||
              nestedFormControlName.includes('office')) && !nestedFormControlName.includes('countrycode')):
              nestedFormGroup.controls[nestedFormControlKey].setValue(randomNameOrNumberGenerator('number'));
              break;
            default:
              break;
          }
        }
      })
    }
    else if (formGroup.controls[key] instanceof FormControl &&
      formGroup.controls[key].enabled) {
      let formControlName = key.toLowerCase();
      switch (true) {
        case formControlName.includes('name'):
          formGroup.controls[key].setValue(randomNameOrNumberGenerator('name'));
          break;
        case (formControlName.includes('email')):
          formGroup.controls[key].setValue(randomNameOrNumberGenerator('name') + "@gmail.in");
          break;
        case ((formControlName.includes('number') || formControlName.includes('mobile') ||
          formControlName.includes('office')) && !formControlName.includes('countrycode')):
          formGroup.controls[key].setValue(randomNameOrNumberGenerator('number'));
          break;
      }
    }
  })
  return formGroup;
}

const randomNameOrNumberGenerator = (type: 'name' | 'number'): string | number => {
  if (type == 'name') {
    let letters = 'abcdefghijklmn';
    let name = '';
    for (let i = 0; i < 6; i++) {
      name += letters[Math.floor(Math.random() * 8)];
    }
    return name;
  }
  else {
    let numbers = '123456789';
    let number = '';
    for (let i = 0; i < 9; i++) {
      number += numbers[Math.floor(Math.random() * 8)];
    }
    return number;
  }
}

interface AutoCompleteInputPropertiesType {
  displayProperty: string;
  valueProperty: string;
}

const retrieveUniqueObjects = (list: Array<object>): Array<object> => {
  return Array.from(new Set(list));
}


const convertStringsToQueryParams = (notificationUrl: string) => {
  let splitStringUptoParam = notificationUrl.substr(notificationUrl.indexOf("?") + 1);
  let param1 = splitStringUptoParam.split("&");
  let queryParams: any = {};
  param1.forEach((p) => {
    let keySubstring = p.substr(0, p.indexOf("="));
    let valueSubstring = p.slice(keySubstring.length + 1);
    queryParams[keySubstring] = valueSubstring;
  });
  return queryParams;
}


// const encryptData = (appData: object | string | number, key: string) => {
//   let formatedAppData = JSON.stringify(appData);
//   let encJson = CryptoJS.AES.encrypt(formatedAppData, cryptoSecretKey, cryptoOptions).toString()
//   let encData = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(encJson));
//   localStorage.setItem(key, encData);
// }


interface FormControlWithBooleanValue {
  controlName: string;
  defaultValue?: boolean;
  isDisabled?: boolean;
}


// const exportToExcel = (selectedRows, data, excelFileName: string) => {
//   import("xlsx").then(xlsx => {
//     const worksheet = xlsx.utils.json_to_sheet((selectedRows.length > 0) ? selectedRows : data);
//     const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
//     const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
//     const blobPropertyBag: BlobPropertyBag = { type: "'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'" };
//     import("file-saver").then(FileSaver => {
//       const blob: Blob = new Blob([excelBuffer], blobPropertyBag);
//       FileSaver.saveAs(blob, excelFileName + '_export_' + new Date().getDate()
//         + "_" + new Date().toLocaleString('default', { month: 'short' }) + "_" + new Date().getFullYear() + '.xlsx');
//     });
//   });
// }

// const saveAsExcelFile = (buffer: any, fileName: string) => {
//   import("file-saver").then(FileSaver => {
//     let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
//     let EXCEL_EXTENSION = '.xlsx';
//     const data: Blob = new Blob([buffer], {
//       type: EXCEL_TYPE
//     });
//     FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
//   });
// }

const urlPatternForStraitaDomain = (control: AbstractControl): object | null => {
  const urlString: string = control.value;
  const regExp = new RegExp(/^(([a-zA-Z0-9\-]*[a-zA-Z0-9])\.){1,}([s][t][r][i][a][t][a].[c][o][m]{1})$/gm);
  if (urlString == '') {
    return null;
  }
  else {
    return (regExp.test(urlString)) ? null : { invalid: true };
  }
}


export {
  formatColumn,
  prepareGetRequestHttpParams,
  removeFormControlError,
  prepareRequiredHttpParams,
  setRequiredValidator,
  setMinMaxLengthValidator,
  removeAllFormValidators,
  clearFormControlValidators,
  removeFormControls,
  addFormControls,
  isString,
  capitalizeFirstLetterOfEachString, setEmailValidator,
  enableFormControls, disableFormControls, autofillFormFieldValues,
  randomNameOrNumberGenerator, setMaxValidatorWithValue, convertStringsToQueryParams,
  setMinValidatorWithValue, generateQueryParams, urlPatternForStraitaDomain,
};

