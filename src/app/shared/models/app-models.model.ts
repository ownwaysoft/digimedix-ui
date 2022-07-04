class CustomDirectiveConfig {
    constructor(customDirectiveConfig?: CustomDirectiveConfig) {
        this.shouldCutKeyboardEventBeRestricted = customDirectiveConfig ? customDirectiveConfig.shouldCutKeyboardEventBeRestricted == undefined ? false : customDirectiveConfig.shouldCutKeyboardEventBeRestricted : false;
        this.shouldPasteKeyboardEventBeRestricted = customDirectiveConfig ? customDirectiveConfig.shouldPasteKeyboardEventBeRestricted == undefined ? false : customDirectiveConfig.shouldPasteKeyboardEventBeRestricted : false;
        this.isANumberOnly = customDirectiveConfig ? customDirectiveConfig.isANumberOnly == undefined ? false : customDirectiveConfig.isANumberOnly : false;
        this.isAnSAIDNumberOnly = customDirectiveConfig ? customDirectiveConfig.isAnSAIDNumberOnly == undefined ? false : customDirectiveConfig.isAnSAIDNumberOnly : false;
        this.isANumberWithZero = customDirectiveConfig ? customDirectiveConfig.isANumberWithZero == undefined ? false : customDirectiveConfig.isANumberWithZero : false;
        this.isANumberWithoutZeroStartWithMaxTwoNumbers = customDirectiveConfig ? customDirectiveConfig.isANumberWithoutZeroStartWithMaxTwoNumbers == undefined ? false : customDirectiveConfig.isANumberWithoutZeroStartWithMaxTwoNumbers : false;
        this.isANumberWithoutZeroStartWithMaxThreeNumbers = customDirectiveConfig ? customDirectiveConfig.isANumberWithoutZeroStartWithMaxThreeNumbers == undefined ? false : customDirectiveConfig.isANumberWithoutZeroStartWithMaxThreeNumbers : false;
        this.isANumberWithoutZeroStartWithMaxTwoNumbersDecimal = customDirectiveConfig ? customDirectiveConfig.isANumberWithoutZeroStartWithMaxTwoNumbersDecimal == undefined ? false : customDirectiveConfig.isANumberWithoutZeroStartWithMaxTwoNumbersDecimal : false;
        this.isAStringOnly = customDirectiveConfig ? customDirectiveConfig.isAStringOnly == undefined ? false : customDirectiveConfig.isAStringOnly : false;
        this.isAStringOnlyNoSpace = customDirectiveConfig ? customDirectiveConfig.isAStringOnlyNoSpace == undefined ? false : customDirectiveConfig.isAStringOnlyNoSpace : false;
        this.isAStringWithHyphenDash = customDirectiveConfig ? customDirectiveConfig.isAStringWithHyphenDash == undefined ? false : customDirectiveConfig.isAStringWithHyphenDash : false;
        this.isHypenOnly = customDirectiveConfig ? customDirectiveConfig.isHypenOnly == undefined ? false : customDirectiveConfig.isHypenOnly : false;
        this.isMltiDotsRestrict = customDirectiveConfig ? customDirectiveConfig.isMltiDotsRestrict == undefined ? false : customDirectiveConfig.isMltiDotsRestrict : false;
        this.isAnAlphaNumericOnly = customDirectiveConfig ? customDirectiveConfig.isAnAlphaNumericOnly == undefined ? false : customDirectiveConfig.isAnAlphaNumericOnly : false;
        this.isAnAlphaNumericWithSlash = customDirectiveConfig ? customDirectiveConfig.isAnAlphaNumericWithSlash == undefined ? false : customDirectiveConfig.isAnAlphaNumericWithSlash : false;
        this.isADecimalOnly = customDirectiveConfig ? customDirectiveConfig.isADecimalOnly == undefined ? false : customDirectiveConfig.isADecimalOnly : false;
        this.isADecimalFourOnly = customDirectiveConfig ? customDirectiveConfig.isADecimalFourOnly == undefined ? false : customDirectiveConfig.isADecimalFourOnly : false;
        this.isAddressOnly = customDirectiveConfig ? customDirectiveConfig.isAddressOnly == undefined ? false : customDirectiveConfig.isAddressOnly : false;
        this.isAccountNumber = customDirectiveConfig ? customDirectiveConfig.isAccountNumber == undefined ? false : customDirectiveConfig.isAccountNumber : false;
        this.isAValidPhoneNumberOnly = customDirectiveConfig ? customDirectiveConfig.isAValidPhoneNumberOnly == undefined ? false : customDirectiveConfig.isAValidPhoneNumberOnly : false;
        this.isAlphaSpecialCharterOnly = customDirectiveConfig ? customDirectiveConfig.isAlphaSpecialCharterOnly == undefined ? false : customDirectiveConfig.isAlphaSpecialCharterOnly : false;
        this.isAlphaSpecialCharterOnlyRestrictCommetntSymbol = customDirectiveConfig ? customDirectiveConfig.isAlphaSpecialCharterOnlyRestrictCommetntSymbol == undefined ? false : customDirectiveConfig.isAlphaSpecialCharterOnlyRestrictCommetntSymbol : false;
        this.isAlphaSomeSpecialCharterOnly = customDirectiveConfig ? customDirectiveConfig.isAlphaSomeSpecialCharterOnly == undefined ? false : customDirectiveConfig.isAlphaSomeSpecialCharterOnly : false;
        this.isAlphaNumericSomeSpecialCharterOnly = customDirectiveConfig ? customDirectiveConfig.isAlphaNumericSomeSpecialCharterOnly == undefined ? false : customDirectiveConfig.isAlphaNumericSomeSpecialCharterOnly : false;
        this.isANumberWithHash = customDirectiveConfig ? customDirectiveConfig.isANumberWithHash == undefined ? false : customDirectiveConfig.isANumberWithHash : false;
        this.isANumberWithColon = customDirectiveConfig ? customDirectiveConfig.isANumberWithColon == undefined ? false : customDirectiveConfig.isANumberWithColon : false;
        this.isANumberWithHypen = customDirectiveConfig ? customDirectiveConfig.isANumberWithHypen == undefined ? false : customDirectiveConfig.isANumberWithHypen : false;
        this.isAlphaNumericWithPasteOnly = customDirectiveConfig ? customDirectiveConfig.isAlphaNumericWithPasteOnly == undefined ? false : customDirectiveConfig.isAlphaNumericWithPasteOnly : false;
    }
    shouldCutKeyboardEventBeRestricted?: boolean;
    isANumberWithHash?: boolean;
    isANumberWithColon?: boolean;
    isANumberWithHypen?: boolean;
    shouldCopyKeyboardEventBeRestricted?: boolean;
    shouldPasteKeyboardEventBeRestricted?: boolean;
    isANumberOnly?: boolean;
    isANumberWithZero?: boolean;
    isANumberWithoutZeroStartWithMaxTwoNumbers?: boolean;
    isANumberWithoutZeroStartWithMaxTwoNumbersDecimal?: boolean;
    isANumberWithoutZeroStartWithMaxThreeNumbers?: boolean;
    isAStringOnly?: boolean;
    isAStringWithHyphenDash?: boolean;
    isAStringOnlyNoSpace?: boolean;
    isHypenOnly?: boolean;
    isMltiDotsRestrict?: boolean;
    isAnAlphaNumericOnly?: boolean;
    isAnAlphaNumericWithSlash?: boolean;
    isAValidPhoneNumberOnly?: boolean;
    isADecimalOnly?: boolean;
    isADecimalFourOnly?: boolean;
    isAddressOnly?: boolean;
    isAccountNumber?: boolean;
    isAlphaSpecialCharterOnly?: boolean;
    isAlphaSpecialCharterOnlyRestrictCommetntSymbol?: boolean;
    isAlphaSomeSpecialCharterOnly?: boolean;
    isAlphaNumericSomeSpecialCharterOnly?: boolean;
    isAlphaNumericWithPasteOnly?: boolean;
    isAnSAIDNumberOnly?: boolean;
}

export { CustomDirectiveConfig };

