import { ComponentFactoryResolver, ComponentRef, Directive, ElementRef, forwardRef, Host, Inject, Input, Optional, Renderer2, ViewContainerRef } from '@angular/core';
import { ControlContainer, FormGroupDirective, NgControl } from '@angular/forms';
import { convertCamelCasesToSpaces, RxjsService } from '@app/shared';
import { ControlErrorComponent, ControlErrorContainerDirective, FormSubmitDirective } from '@app/shared/directives/form-control-errors';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { EMPTY, fromEvent, iif, merge, Observable } from 'rxjs';
import { FORM_ERRORS } from './form-errors';

export const formDirectiveProvider: any = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupDirective)
};
@Directive({
  selector: '[formControl], [formControlName]',
  providers: [formDirectiveProvider]
})
export class ControlErrorsDirective {
  ref: ComponentRef<ControlErrorComponent>;
  container: ViewContainerRef;
  submit$: Observable<Event>;
  @Input() customErrors = {};
  isFormSubmittedSuccessfully = false;

  constructor(
    private elementRef: ElementRef<HTMLFormElement>,
    private vcr: ViewContainerRef,
    private resolver: ComponentFactoryResolver,
    @Optional() controlErrorContainer: ControlErrorContainerDirective,
    @Inject(FORM_ERRORS) private errors,
    private rxjsService: RxjsService,
    @Optional() @Host() private form: FormSubmitDirective,
    private controlDir: NgControl, private renderer: Renderer2) {
    this.container = controlErrorContainer ? controlErrorContainer.vcr : vcr;
    this.submit$ = this.form ? this.form.submitted$ : EMPTY;
    // this.currentElement.setAttribute('autocomplete', 'off'+Math.random());
  }

  get currentElement() {
    if (this.elementRef.nativeElement.localName === 'select' || this.elementRef.nativeElement.localName === 'mat-radio-group') {
      // for material matNativeControl element
      if (this.elementRef.nativeElement.className.includes('mat-form-field-autofill-control cdk-text-field-autofill-monitored')) {
        return this.elementRef.nativeElement;
      }
      else {
        return this.elementRef.nativeElement;
      }
    }
    else if (this.elementRef.nativeElement.localName === 'mat-select-autocomplete-custom-control') {
      return this.elementRef.nativeElement.children[0].children[0].children[0].children[0].children[0];
    }
    else {
      return this.elementRef.nativeElement.children.length === 0 ? this.elementRef.nativeElement : this.elementRef.nativeElement.children[0];
    }
  }

  ngOnInit() {
    if (this.form) {
      const parentFormSubmit$ = iif(
        () => !!this.form,
        this.form.submitted$,
      );
      const parentFormReset$ = iif(
        () => !!this.form,
        this.form.reset$,
      );
      this.rxjsService.getFormSubmittedSuccessfullyProperty().subscribe((isFormSubmittedSuccessfully: boolean) => {
        this.isFormSubmittedSuccessfully = isFormSubmittedSuccessfully;
      })
      const touched$ = fromEvent(this.currentElement, 'blur');
      // const paste$ = fromEvent(this.currentElement, 'paste');
      // const cut$ = fromEvent(this.currentElement, 'cut');
      // const copy$ = fromEvent(this.currentElement, 'copy');
      const keyup$ = fromEvent(this.currentElement, 'keyup');
      merge(
        parentFormSubmit$,
        touched$,
        parentFormReset$,
        //   cut$,
        // copy$,
        // paste$,
        keyup$,
        this.control.valueChanges
      ).pipe(
        untilDestroyed(this)).subscribe((response) => {
          let controlErrors;
          if (!response) return;
          switch (true) {
            case response instanceof ClipboardEvent:
              switch (response['type']) {
                case "cut":
                  break;
                case "copy":
                  break;
                // case "paste":
                //   let clipboardData = response['clipboardData'] || window['clipboardData'];
                //   let pastedText = clipboardData.getData('text');
                //   event.preventDefault();
                //   this.control.setValue(pastedText.trim());
                //   break;
              }
              break;
            case response instanceof KeyboardEvent:
              const value = this.currentElement['value'];
              if (!value) return;
              switch (response['type']) {
                case "keyup":
                  const trailingWhitespace = value.startsWith(' ') ? true : false;
                  if (trailingWhitespace) {
                    event.preventDefault();
                    // remove space starts with the letter
                    this.control.setValue(value.trim());
                  }
                  else {
                    if (response['key'] == 'a') {
                      return;
                    }
                    if (response['key'] == 'Control') {
                      return;
                    }
                    if (response['key'] == 'Escape') {
                      return;
                    }
                    else {
                      // remove continuous multiple spaces into single space
                      //this.control.setValue(value.replace(/\s\s+/g, ' '))
                    }

                  }
                  break;
              }
              break;
            case response instanceof FocusEvent:
              break;
          }
          let fieldName = '';
          let name = "";
          // enable in future
          // if (this.currentElement.localName == "mat-radio-group") {
          //   name = this.currentElement['id'];
          // }
          // else {
          //   name = this.currentElement['name'];
          // }
          name = this.currentElement['name'];
          // if (this.currentElement['accesskey']) {
          //   fieldName = this.currentElement['accesskey'];
          // }
          if (name !== '' && name) {
            fieldName = name;
          }
          else {
            fieldName = this.controlDir.name;
          }
          if (fieldName == null) return;
          if (this.control?.errors) {
            controlErrors = this.control.errors;
          }
          if (controlErrors && fieldName && response['type'] !== 'reset') {
            if (controlErrors.hasOwnProperty('minlength') && (this.currentElement['title'] === '+27' && this.control.value.replace(/\s/g, "").length == 9)) {
              return;
            }
            else if (controlErrors.hasOwnProperty('minlength') && (this.currentElement['title'] === '+91' && this.control.value.replace(/\s/g, "").length == 10)) {
              return;
            }
            else if (controlErrors.hasOwnProperty('minlength') && (this.currentElement['title'] === 'cardNumberValidation' && this.control.value.replace(/\s/g, "").length == 16)) {
              return;
            }
            else if (controlErrors.hasOwnProperty('required') && this.currentElement['className'].indexOf('mat-autocomplete-trigger') != -1) {
              return;
            }
            else if (controlErrors.hasOwnProperty('required') && this.currentElement['className'].indexOf('ui-autocomplete') != -1) {
              return;
            }
            else {
              this.renderer.addClass(this.currentElement, 'is-invalid');
              if (!name) {
                fieldName = convertCamelCasesToSpaces(fieldName);
              }
              let firstLetterUppercase = fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
              const firstKey = Object.keys(controlErrors)[0];
              if (typeof controlErrors[firstKey] === 'object') {
                controlErrors[firstKey].formControlName = firstLetterUppercase;
              }
              else {
                controlErrors[firstKey] = controlErrors;
                controlErrors[firstKey].formControlName = firstLetterUppercase;
              }
              controlErrors[firstKey].selectedCountryCode = this.currentElement['title'];
              if (this.currentElement?.['accessKey']) {
                controlErrors[firstKey]['actualErrorMessage'] = this.currentElement['accessKey'];
              }
              let getError;
              if (firstKey === 'Mask error') {
                getError = this.errors['maskError'];
              }
              else {
                getError = this.errors[firstKey];
              }
              if (firstKey != 'matDatepickerMin') {
                let text = this.customErrors[firstKey] || getError(controlErrors[firstKey]);
                this.setError(text);
              }
            }
          } else if (this.ref) {
            this.renderer.removeClass(this.currentElement, 'is-invalid');
            this.setError(null);
          }
        })
    }
  }

  get control() {
    return this.controlDir.control;
  }

  setError(text: string) {
    if (!this.ref) {
      const factory = this.resolver.resolveComponentFactory(ControlErrorComponent);
      this.ref = this.container.createComponent(factory);
    }
    this.ref.instance.text = text;
  }

  ngOnDestroy() {

  }

}