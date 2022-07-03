import {
  Directive,
  ElementRef,
  HostListener,
  Input, Optional
} from "@angular/core";
import { NgControl } from "@angular/forms";
import { CustomDirectiveConfig } from "../../models";

@Directive({
  selector: "[validateInput],[formControlName][validateInput],[formControl][validateInput]",
})
export class ValidateInputDirective {
  @Input("validateInput") config?= new CustomDirectiveConfig();
  private regex: RegExp | any;
  private specialKeys: Array<string> = ["Backspace"];

  constructor(
    private elementRef: ElementRef<any>,
    @Optional() private controlDir: NgControl
  ) { }

  ngOnInit() {
    if (this.config == null || this.config == undefined) {
      return;
    }
    switch (true) {
      case this.config.isANumberWithZero:
        this.regex = new RegExp(/^([0-9][0-9]*)$/g);
        break;
      case this.config.isANumberWithHash:
        this.regex = new RegExp(/^[0-9#]+$/g);
        break;
      case this.config.isANumberWithColon:
        this.regex = new RegExp(/^[0-9:]+$/g);
        break;
      case this.config.isANumberOnly:
        this.regex = new RegExp(/^([0-9][0-9]*)$/g);
        break;
      case this.config.isAStringOnly:
        this.regex = new RegExp(/^[a-zA-Z0-9*--%!.@\s#$&\\-`.+,/\"]*$/g);
        break;
      case this.config.isAStringOnlyNoSpace:
        this.regex = new RegExp(/^([a-zA-Z]*)$/g);
        break;
      case this.config.isAStringWithHyphenDash:
        this.regex = new RegExp(/^[a-zA-Z-_]*$/g);
        break;
      case this.config.isHypenOnly:
        this.regex = new RegExp(/^((?!-)(?!.*--)[a-zA-Z0-9 -]*)$/g);
        break;
      case this.config.isMltiDotsRestrict:
        this.regex = new RegExp(/^((?!\.)(?!.*\.\.)[a-zA-Z0-9 .]*)$/g);
        break;
      case this.config.isAnAlphaNumericOnly:
        this.regex = new RegExp(/^([a-zA-Z0-9 ]*)$/g);
        break;
      case this.config.isAnAlphaNumericWithSlash:
        this.regex = new RegExp(/^([a-zA-Z0-9/]*)$/g);
        break;
      case this.config.isADecimalOnly:
        this.regex = new RegExp(/^\d+(\.\d{0,2})?$/);
        break;
      case this.config.isADecimalFourOnly:
        this.regex = new RegExp(/^\d+(\.\d{0,4})?$/);
        break;
      case this.config.isAlphaSpecialCharterOnly:
        this.regex = new RegExp(/^[a-zA-Z @+*'.&'\"=/\,\-\s]{1,255}$/g);
        break;
      case this.config.isAlphaSomeSpecialCharterOnly:
        this.regex = new RegExp(/^[a-zA-Z &/s]{1,255}$/g);
        break;
      case this.config.isAlphaNumericSomeSpecialCharterOnly:
        this.regex = new RegExp(/^[a-zA-Z0-9 &/s]{1,255}$/g);
        break;
      case this.config.isAlphaSpecialCharterOnlyRestrictCommetntSymbol:
        this.regex = new RegExp(/^(?!.*--)[a-zA-Z \-]+$/g);
        break;
      case this.config.isANumberWithoutZeroStartWithMaxTwoNumbers:
        this.regex = new RegExp(/^((?!(0))[0-9]{1,2})$/g);
        break;
      case this.config.isANumberWithoutZeroStartWithMaxThreeNumbers:
        this.regex = new RegExp(/^((?!(0))[0-9]{1,3})$/g);
        break;
      case this.config.isANumberWithoutZeroStartWithMaxTwoNumbersDecimal:
        this.regex = new RegExp(/^((?!(0))[0-9]{1,2}(\.\d{1,2})*)$/g);
        break;
      case this.config.isANumberWithHypen:
        this.regex = new RegExp(/^[0-9-]+$/g);
        break;
      case this.config.isAddressOnly:
        this.regex = new RegExp(/^([a-zA-Z0-9, /]*)$/g);
        break;
      case this.config.isAccountNumber:
        this.regex = new RegExp(/^([0-9]{0,12})$/g);
        break;
      case this.config.isAValidPhoneNumberOnly:
        this.regex = new RegExp(/^([0-9 ]{0,12})$/g);
        break;
      case this.config.isAlphaNumericWithPasteOnly:
        this.regex = new RegExp(/^([a-zA-Z0-9 ]*)$/g);
        break;
      default:
        this.regex = new RegExp(/^[a-zA-Z0-9*--%!.@\s#$&\\-`.+,/\"]*$/g);
        break;
    }
  }

  get nativeElement() {
    return this.elementRef.nativeElement.children.length === 0 ? this.elementRef.nativeElement : this.elementRef.nativeElement.children[0];
  }

  @HostListener("keypress", ["$event"])
  onKeyPress(event: KeyboardEvent | any) {
    let current: string = this.nativeElement.value;
    let next: string = current.concat(event.key);
    if (event.target['name'].toLowerCase().includes('said')) {
      const regExp = new RegExp(/^([0-9][0-9]*)$/g);
      if (!regExp.test(next)) {
        event.preventDefault();
      }
    }
    else if (event.target['name'].toLowerCase() === 'email' || event.target['id'].toLowerCase() === 'email') {
      return;
    }
    else if (this.config && this.config.isAValidPhoneNumberOnly && this.specialKeys.indexOf(event.key) === -1) {
      if (event.which < 48 || event.which > 57) {
        event.preventDefault();
      }
      // this.applySpaceMaskToMobileNumbers(this.nativeElement.value, false);
    }
    else {
      // prevent space at the first position of the input field
      if (event.which === 32 && this.nativeElement.value.length === 0 && event.code !== 'Tab') {
        event.preventDefault();
      }
      // Allow Backspace and hyphen keys
      if (this.specialKeys.indexOf(event.key) !== -1 && event.code !== 'Tab') {
        return;
      }
      // if (next && !String(next).match(this.regex) && event.code.includes('Digit')) {
      //   // add your logics additionally for decimal pointed form controls
      // }
      // else if (next && !String(next).match(this.regex) && event.code !== 'Tab' && !event.code.includes('Digit')) {
      //   event.preventDefault();
      // }
      const isRegExpSatisfied = next && String(next).match(this.regex);
      if (isRegExpSatisfied) {
        if (next && !String(next).match(this.regex) && event.code.includes('Digit')) {
          // add your logics additionally for decimal pointed form controls
        }
        else if (next && !String(next).match(this.regex) && event.code !== 'Tab' && !event.code.includes('Digit')) {
          event.preventDefault();
        }
      }
      else {
        event.preventDefault();
      }
    }
  }

  @HostListener('paste', ['$event'])
  onKeyPaste(event: KeyboardEvent | any) {
    // this condition is to prevent the user from pasting data into disabled fields
    if (this.nativeElement.disabled) return;
    if (this.config?.shouldPasteKeyboardEventBeRestricted) {
      event.preventDefault();
    } else {
      if (this.config == null || this.config == undefined) {
        return;
      }
      let finalClipboardData = '';
      let fieldValue = this.nativeElement.value;
      let pastedText = event["clipboardData"].getData("text");
      event.preventDefault();
      switch (true) {
        case this.config.isAStringOnly:
          pastedText = fieldValue + pastedText;
          pastedText.match(/[a-zA-Z0-9*--%!.@\s#$&\\-`.+,/\"]*$/g).forEach((word: string) => {
            finalClipboardData += word;
          });
          break;
        case this.config.isANumberOnly:
          pastedText = fieldValue + pastedText;
          pastedText.match(/[0-9]/g).forEach((word: string) => {
            finalClipboardData += word;
          });
          break;
        case this.config.isAnAlphaNumericOnly:
          pastedText = fieldValue + pastedText;
          pastedText.match(/[a-zA-Z0-9 ]/g).forEach((word: string) => {
            finalClipboardData += word;
          });
          break;
        case this.config.isAnAlphaNumericWithSlash:
          pastedText = fieldValue + pastedText;
          pastedText.match(/[a-zA-Z0-9/]/g).forEach((word: string) => {
            finalClipboardData += word;
          });
          break;
        case this.config.isANumberWithoutZeroStartWithMaxTwoNumbers:
          pastedText = fieldValue + pastedText;
          pastedText.match(/^((?!(0))[0-9]{1,2})$/g)?.forEach((word: string) => {
            finalClipboardData += word;
          });
          break;
        case this.config.isANumberWithoutZeroStartWithMaxThreeNumbers:
          pastedText = fieldValue + pastedText;
          pastedText.match(/^((?!(0))[0-9]{1,3})$/g)?.forEach((word: string) => {
            finalClipboardData += word;
          });
          break;
        // number with space mask
        case new RegExp(/^([0-9 ]*)$/g).test(pastedText):
          pastedText = fieldValue + pastedText;
          pastedText.match(/[0-9]/g).forEach((word: string) => {
            finalClipboardData += word;
          });
          break;
        case this.config.isAValidPhoneNumberOnly:
          pastedText = fieldValue + pastedText;
          pastedText.match(/[0-9]/g).forEach((word: string) => {
            finalClipboardData += word;
          });
          if (finalClipboardData.length > 10) {
            finalClipboardData = finalClipboardData.slice(0, 10);
          }
          // this.applySpaceMaskToMobileNumbers(finalClipboardData, false);
          break;
        case Object.keys(this.config?.isADecimalWithConfig ? this.config.isADecimalWithConfig : {}).length > 0:
          pastedText = fieldValue + pastedText;
          pastedText.match(/[0-9]/g).forEach((word: string) => {
            finalClipboardData += word;
          });
          break;
        // Pasted text will not append with field value. Its same as isAnAlphaNumericOnly
        case this.config.isAlphaNumericWithPasteOnly:
          pastedText = pastedText;
          pastedText.match(/[a-zA-Z0-9 ]/g).forEach((word: string) => {
            finalClipboardData += word;
          });
          break;
        case this.config.isAnSAIDNumberOnly:
          if (fieldValue?.length <= 6) {
            pastedText = fieldValue + pastedText;
            pastedText.match(/^([0-9]{2}(([0][1-9])|([1][0-2])){1}(([0-2][1-9])|([3][0-1])){1})$/g)?.forEach((word: string) => {
              finalClipboardData += word;
            });
          }
          break;
        default:
          pastedText = pastedText;
          pastedText.match(/[a-zA-Z0-9*--%!.@\s#$&\\-`.+,/\"]*$/g).forEach((word: string) => {
            finalClipboardData += word;
          });
          finalClipboardData = fieldValue + finalClipboardData;
          break;
      }
      // this.controlDir.control.setValue(finalClipboardData);
    }
  }

}
