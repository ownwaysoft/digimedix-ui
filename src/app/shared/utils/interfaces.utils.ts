import { CrudType, ValidatorTypes } from './enums.utils';
interface IApplicationResponse {
  isSuccess: boolean,
  message: string,
  statusCode: number,
  totalCount: number,
  exceptionMessage?: string,
  resources: any
}

interface BreadCrumbItem {
  displayName: string,
  relativeRouterUrl?: string,
  queryParams?: {
    key: string,
    value: string
  }
}


interface DialogFormProperties {
  title: string,
  formControlName: string,
  datatype: string,
  placeholder?: string,
  dropdownValues?: any[],
  isAstaticDropdown?: boolean,
  relatedFormControls?: Array<string>,
  validators?: Validators
}

interface Validators {
  [ValidatorTypes.REQUIRED]?: boolean,
  [ValidatorTypes.MIN_LENGTH]?: number,
  [ValidatorTypes.MAX_LENGTH]?: number,
  [ValidatorTypes.MIN]?: number,
  [ValidatorTypes.MAX]?: number,
  [ValidatorTypes.EMAIL]?: string,
  [ValidatorTypes.PATTERN]?: RegExp
}

interface IAfrigisAddressComponents {
  suburbName: string, cityName: string,
  provinceName: string, postalCode: string,
  streetName: string, streetNo: string,
  buildingName: string, buildingNo: string,
  estateName: string, estateStreetName: string,
  estateStreetNo: string
}

interface viewDetails {
  name: string;
  value: string;
  className?: string;
  labelClassName?: string;
  valueWidth?: string;
  valueColor?: string;
  statusClass?: string;
  isFullNumber?: boolean;
  isValue?: boolean;
  checked?: boolean;
  isDate?: boolean;
  isDateTime?: boolean;
  valueclassName?: boolean;
  order?: number;
  enableHyperLink?: boolean;
  isButton?: boolean;
  isButtonClass?: string;
  isButtonTooltip?: string;
  isIconClass?: string;
  options?: Array<{}>;
}

interface multiViewDetails {
  name: string;
  value: string;
  className?: string;
  columns?: viewDetails[];
}

export {
  IApplicationResponse, DialogFormProperties,
  BreadCrumbItem, Validators, IAfrigisAddressComponents, viewDetails, multiViewDetails
};
