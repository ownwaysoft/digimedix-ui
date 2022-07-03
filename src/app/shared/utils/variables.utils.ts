
const formConfigs = {
  masterSettingMinLength: 3,
  masterSettingMinNameLength: 3,
  masterSettingMaxNameLength: 75,
  minLengthTwo: 2,
  minLengthZero: 0,
  maxLengthTwenty: 20,
  thirteenLength: 13,
  eleven: 11,
  sixteenDigits: 16,
  minAccountNumberDigits: 9,
  minLengthEightForPassword: 8,
  maxLengthFiveHundred: 500,
  maxLengthHundred: 100,
  maxLengthFifteenForPassword: 15,
  generalLengthFive: 5,
  generalNameLengthFiftyLength: 30,
  generalNameLengthSeventyFiveLength: 75,
  generalNameLengthTwoFifty: 250,
  phoneNumberMaxLength: 16,
  postalCodeMaxLength: 4,
  firstNameMinLength: 1,
  firstNameMaxLength: 50,
  lastNameMinLength: 1,
  lastNameMaxLength: 75,
  streetNumberMinLength: 1,
  streetNumberMaxLength: 10,
  streetNameMinLength: 3,
  streetNameMaxLength: 50,
  buildingNameMinLength: 2,
  buildingNameMaxLength: 50,
  buildingNumberMinLength: 1,
  buildingNumberMaxLength: 10,
  percentageMinlength: 2,
  percentageMaxlength: 5,
  percentageMaxvalue: 100,
  contactnumberLength: 16,
  itemNameMinLength: 1,
  itemNameMaxLength: 250,
  itemCategoryNameMinLength: 0,
  itemCategoryNameMaxLength: 100,
  itemCodeMinLength: 0,
  itemCodeMaxLength: 20,
  itemBrandNameMinLength: 0,
  itemBrandNameMaxLength: 20,
  creditCardNumberWithSpaceMask: 19,
  creditCardNumberWithoutSpaceMask: 16,
  uOMNameMinLength: 0,
  uOMNameMaxLength: 20,
  itemPriceTypeNameMinLength: 1,
  itemPriceTypeNameMaxLength: 100,
  contactnumberMinLength: 11,
  contactnumberMaxLength: 12,
  divisionMinLength: 2,
  divisionMaxLength: 75,
  warrentPeriodMinValue: 1,
  warrentPeriodMaxValue: 99,
  stockThresholdMinValue: 1,
  stockThresholdMaxValue: 20000,
  contactnumberMinLengthNineDigit: 9,
  nineDigits: 9,
  fifteen: 15,
  sixteen: 16,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  ten: 10,
  fifty: 50,
  twoFifty: 250,
  threeHundred: 300,
  thousands: 1000,
  maxLengthThree: 3,
  maxLengthFifty: 50,
  serviceCategoryDescription: 100,
  southAfricanContactNumberMaxLength: 11,
  indianContactNumberMaxLength: 12,
  maxLengthTwentyFive: 25,
  cardNumber: 19,
  countryId: '5AF34A38-AB5B-4A45-BC19-2F4486FABCD0',
  generalName2LengthFiftyLength: 150
};

const defaultCountryCode = "+27";  // refers to south africa

const mobileNumberMaskPattern = '00 000 00000';    // default pattern refers to ngx pattern npm module

const landLineNumberMaskPattern = '00 000 00000';    // default pattern refers to ngx pattern npm module

const debounceTimeForSearchkeyword = 600       // in milliseconds

const debounceTimeForDeepNestedObjectSearchkeyword = 1000       // in milliseconds

const countryCodes = [{ displayName: '+27' }, { displayName: '+91' }, { displayName: '+45' }];   // default country codes

const defaultLeafLetMapZoomValue = 6;              // to zoom leaf let map

const defaultLeafletLatitude = -25.90589;              // to open leaf let map with initial latitude (south african region)

const defaultLeafletLongitude = 28.121942;              // to open leaf let map with initial longitude (south african region)

const leaflefApiKey = 'wly6pnqvmbuioatp8an1zigi6n3h6mntxr5c4mxw';

const regionId = "11BCD049-07B7-4E2E-84D5-12A5A5E8C608";               // Default region Id

const monthsByNumber = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

const PERMISSION_RESTRICTION_ERROR = 'Permission is restricted..!!';

const ACCEPTABLE_ALL_MAJOR_FILE_EXTENSIONS = ['.doc','.docx','.jpg','.jpeg','.pdf','.png','.xls','.xlsx','.DOC','.DOCX','.JPG','.JPEG','.PDF','.PNG','.XLS','.XLSX'];

const WRONG_FILE_EXTENSION_SELECTION_ERROR = 'Select a valid file';

const PABX_ID = '11BCD049-07B7-4E2E-84D5-12A5A5E8C608';

const DEFAULT_EXTENSION_NUMBER = '4028';

const MAX_FILES_UPLOAD_COUNT = 5;



const standardHeightForPscrollContainer='65vh';

const DELETE_CONFIRMATION_MESSAGE=`Are you sure you want to delete this?`;

export {
  formConfigs, defaultCountryCode, mobileNumberMaskPattern, landLineNumberMaskPattern, debounceTimeForSearchkeyword, countryCodes,
  defaultLeafLetMapZoomValue, defaultLeafletLatitude, defaultLeafletLongitude, leaflefApiKey, regionId, monthsByNumber, PERMISSION_RESTRICTION_ERROR,
  debounceTimeForDeepNestedObjectSearchkeyword, ACCEPTABLE_ALL_MAJOR_FILE_EXTENSIONS, WRONG_FILE_EXTENSION_SELECTION_ERROR, PABX_ID,
  DEFAULT_EXTENSION_NUMBER, MAX_FILES_UPLOAD_COUNT,standardHeightForPscrollContainer,DELETE_CONFIRMATION_MESSAGE
};

