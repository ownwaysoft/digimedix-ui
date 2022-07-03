import { InjectionToken } from '@angular/core';

export const defaultErrors = {

  required: ({ formControlName }) => {
    let name: string = formControlName ? formControlName : 'This field';
    name = (name?.toLowerCase()?.indexOf('psira') != -1) ? name?.toLowerCase()?.replace('psira', 'PSIRA') :
      (name?.toLowerCase()?.indexOf('sap') != -1) ? name?.toLowerCase()?.replace('sap', 'SAP') :
        name.slice(-2) == ' S' ? name.slice(0, name.lastIndexOf(" ")) : name;
    switch (name) {
      case 'Protocol Entifier':
        return `Protocol Identifier is required`;
      case 'Pdaid':
        return `PDA ID is required`;
      case 'Ptt Id':
        return `PTT ID is required`;
      case 'Ptt Registration ':
        return `PTT Registration is required`;
      case 'Pda Registration ':
        return `PDA Registration is required`;
      case 'Imei Number':
        return `IMEI Number is required`;
      case 'Stack Config Alarm Groups':
        return `Alarm Group is required`;
      case 'Incident Divisions List':
        return `Division is required`;
      case 'Proactive Patrol Division List':
        return `Division is required`;
      case 'Dispatch Exception Divisions List':
        return `Division is required`;
      case 'Divisions':
        return `Division is required`;
      case 'Alarm Types':
        return `Signal Type is required`;
      case 'Stack Area Config Division List':
        return `Division is required`;
      case 'Find U Dispatch Division List':
        return `Division is required`;
      case 'Safe Entry Limit Divisions List':
        return `Division is required`;
      case 'Signal Automation Division List':
        return `Division is required`;
      case 'Signal Automation Signal Type List':
        return `Signal Type is required`;
      case 'Courtesy Patrol Timing Main Area List':
        return `Main Area is required`;
      case 'Stack Area Config Main Area List':
        return `Main Area is required`;
      case 'Community Patrol Division List':
        return `Division is required`;
      case 'Cmc Feedback Divisions List':
        return `Division is required`;
      case 'Vehicle Check List':
        return `Vehicle Check Item is required`;
      case 'Max Suspend Delay Division List':
        return `Division is required`;
      case 'Check List Divisions List':
        return `Division is required`;
      case 'Check List Option':
        return `Mandatory  is required`;
      case 'Property Access Divisions List':
        return `Division is required`
      case 'Alarm Type Config Division List':
        return `Division is required`
      case 'Cmc Feedback':
        return `CMC Feedback is required`;
      case 'Cmc Escalation Time':
        return `CMC Escalation Time is required`;
      case 'Feedback Offsite Division List':
        return `Division is required`;
      case 'Decline Setup Divisions List':
        return `Division is required`
      case 'V As Config Divisions List':
        return `Division is required`
      case 'R O Community Patrol Divisions List':
        return `Division is required`
      case 'Decline Setup Divisions List':
        return `Division is required`;
      case 'Reporting Config Division List':
        return `Division is required`;
      case 'Community Name':
        return `Community Patrol Name is required`
      case 'Stack Config Divisions':
        return `Division is required`
      case 'Stack Config Customer Types':
        return `Customer Type is required`
      case 'Stats Config Alarm Types List':
        return `Stats Config Alarm Type is required`
      case 'Stats Config Event Types List':
        return `Stats Config Event Type is required`
      case 'Arrival Threshold Count In28day':
        return `Arrival Threshold Count In 28 day is required`
      case 'Coordinator Tech Area List':
        return `Tech Area is required`
      case 'Coordinator Main Area List':
        return `Main Area is required`
      case 'Stock Id':
        return `Stock ID is required`
      case 'Stock Id Notes':
        return `Stock ID Notes is required`
      case 'Gl Code':
        return `GL Code is required`
      case 'Pc':
        return `PC is required`
      case 'Cngl':
        return `CNGL is required`
      case 'Excessive Doa Role':
        return `Excessive DOA Role is required`
      case 'Excessive Doa Period':
        return `Excessive DOA Period is required`
      case 'Is Address Verified':
        return `Address Verification is required`
      case 'Details':
        return `Day is required`
      case 'Max Zone Suspend To Date':
        return 'Till Time is required'
      case 'Useful Number Division List':
        return 'Division is required'
      case 'Useful Number Main Area List':
        return ' Main Area is required'
      case 'Erb Excluded Alarm Type List':
        return 'ERB Excluded Event is required'
      case 'Erb Excluded Site Type List':
        return 'ERB Categories is required'
      case 'Erb Excluded Origin List':
        return 'ERB Origin is required'
      case 'Category Name':
        return 'Call Category Name is required'
      case 'Customer Messaging Alarm Groups List':
        return 'Alarm Group is required'
      case 'Service Call Approval Status ':
        return 'Status is required'
      case 'Fidelity Adt Sim':
        return 'Fidelity ADT Sim is required'
      case 'Invoice Transaction Description S':
        return 'Transaction Description is required'
      case 'Invoice Transaction Description Sub Type S':
        return 'Sub Type Description is required'
      case 'Campaign Date':
        return 'Date is required'
      case 'Credit Controller S':
        return 'Credit Controller is required'
      case 'Division S':
        return 'Division is required'
      case 'Debtor S':
        return 'Debtor is required'
      case 'District S':
        return 'District is required'
      case 'Region S':
        return 'Region is required'
      case 'Branch S':
        return 'Branch is required'
      case 'Marketing Campaign Medium S':
        return 'Medium is required'
      case 'Marketing Campaign Type S':
        return 'Campaign Type is required'
      default:
        return `${name} is required`;
    }
  },

  matDatepickerParse: ({ formControlName }) => {
    const name: string = formControlName ? formControlName : 'This field';
    return `${name} is required`;
  },

  owlDateTimeParse: ({ formControlName }) => {
    const name: string = formControlName ? formControlName : 'This field';
    return `${name} is invalid`;
  },

  pattern: ({ formControlName }) => {
    const name: string = formControlName ? formControlName : 'This field';
    return `${name} is invalid`;
  },

  invalid: ({ formControlName }) => {
    const name: string = formControlName ? formControlName : 'This field';
    return `${name} is invalid`;
  },

  atleastOneOfTheFieldsIsRequired: () => {
    return `Atleast one of the fields is required`;
  },

  email: ({ formControlName }) => {
    const name: string = formControlName ? formControlName : 'This field';
    return `${name} is invalid`;
  },

  contactnumberMinLength: ({ formControlName, requiredLength, actualLength }) => {
    const name: string = formControlName ? formControlName : 'This field';
    return `${name} should be 9 digits`;
  },

  contactnumberMaxLength: ({ formControlName, requiredLength, actualLength }) => {
    const name: string = formControlName ? formControlName : 'This field';
    return `${name} must not be longer than 10 digits`;
  },

  maskError: ({ formControlName }) => {
    const name: string = formControlName ? formControlName : 'This field';
    return `${name} is invalid`;
  },

  matDatepickerMin: ({ formControlName }) => {
    const name: string = formControlName ? formControlName : 'This field';
    return `${name} should be greater date`;
  },

  minlength: ({ formControlName, requiredLength, actualLength, selectedCountryCode, actualErrorMessage }) => {
    let errorMessageSuffix = formControlName.toLowerCase().includes('number') ? 'digits' : 'characters';
    let name: string = formControlName ? formControlName : 'This field';
    name = (name?.toLowerCase()?.indexOf('psira') != -1) ? name?.toLowerCase()?.replace('psira', 'PSIRA') :
      (name?.toLowerCase()?.indexOf('sap') != -1) ? name?.toLowerCase()?.replace('sap', 'SAP') : name;
    var re = /Mobile Number|Contact Number|Phone Number|Home Number|Office Number|Sms Number|Premises Number|Monitoring Center Number/gi;
    const formControlNameMatch = (formControlName.includes('Company Number'));
    if (selectedCountryCode === '+27') {
      return `${name} should be 9 ${errorMessageSuffix}`;
    }
    else if (selectedCountryCode == '+91' || selectedCountryCode == '+1' || selectedCountryCode == '+45' || selectedCountryCode == '+44') {
      return `${name} should be 10 ${errorMessageSuffix}`;
    }
    else if (formControlName.search(re) !== -1 || formControlNameMatch) {
      return `${name} should be 9 to 10 ${errorMessageSuffix}`;
    }
    else if (selectedCountryCode === 'cardNumberValidation') {
      return `${name} should be 16 ${errorMessageSuffix}`;
    }
    switch (name) {
      case 'Pdaid':
        return `PDA ID should be 15-17 ${errorMessageSuffix}`;
      case 'Phone Number':
        return `Phone Number should be 9 ${errorMessageSuffix}`;
      case 'Ptt Id':
        return `PTT ID should be 5-17 ${errorMessageSuffix}`;
      case 'Imei Number':
        return `IMEI Number should be 15-17 ${errorMessageSuffix}`;
      case 'Sim Card Number':
        return `Sim Card Number should be 10-25 ${errorMessageSuffix}`;
      case 'Cmc Feedback':
        return `CMC Feedback should be 3-20 ${errorMessageSuffix}`;
      case 'Cmc Escalation Time':
        return `CMC Escalation Time should be 2 ${errorMessageSuffix}`;
      case 'Delay Time':
        return `Minimum Delay duration is 10 Seconds`;
      case 'Time Delay':
        return `Minimum Time Delay duration is 10 Seconds`;
      case 'Community Name':
        return `Community Patrol Name should be 3-20 ${errorMessageSuffix}`;
      default:
        if (actualErrorMessage) {
          if (actualErrorMessage == 'minimumLengthIsRequiredLength') {
            return `${name} should be ${requiredLength} ${errorMessageSuffix}`;
          }
          else {
            return `${name} ${actualErrorMessage} ${requiredLength} ${errorMessageSuffix}`;
          }
        }
        else {
          return `${name} should be minimum of ${requiredLength} ${errorMessageSuffix}`;
        }
    }
  },

  maxlength: ({ formControlName, requiredLength, actualLength, selectedCountryCode }) => {
    let errorMessageSuffix = formControlName.toLowerCase().includes('number') ? 'digits' : 'characters';
    const name: string = formControlName ? formControlName : 'This field';
    if (selectedCountryCode === '+27') {
      return `${name} must not be longer than 9 ${errorMessageSuffix}`;
    }
    else if (selectedCountryCode == '+91' || selectedCountryCode == '+1' || selectedCountryCode == '+45' || selectedCountryCode == '+44') {
      return `${name} must not be longer than 10 ${errorMessageSuffix}`;
    }
    else {
      return `${name} must not be longer than ${requiredLength} ${errorMessageSuffix}`;
    }
  },

  duplicate: ({ formControlName }) => {
    const name: string = formControlName ? formControlName : 'This field';
    return `${name} is duplicate`;
  },

  min: ({ formControlName, min, actual }) => {
    const name: string = formControlName ? formControlName : "This field";
    const leadingWord = (name.toLowerCase().includes("no of levels") || name.toLowerCase().includes("start") || name.toLowerCase().includes("length") || name.toLowerCase().includes("port") || name.toLowerCase().includes('service arrival count') || name.toLowerCase().includes("tolerance level") ||
      name.toLowerCase().includes("minimum threshold") || name.toLowerCase().includes("warranty period") || name.toLowerCase().includes("window") ||
      name.toLowerCase().includes("no of bin") || name.toLowerCase().includes("required quantity") || name.toLowerCase().includes("max distance") || name.toLowerCase().includes("max count") || name.toLowerCase().includes("delay time") || name.toLowerCase().includes("time delay") ||
      name.toLowerCase().includes("device moved distance") || name.toLowerCase().includes("patrol time") || name.toLowerCase().includes("rest time") || name.toLowerCase().includes("distance") || name.toLowerCase().includes("dispatch time") || name.toLowerCase().includes("time") || name.toLowerCase().includes("duration") || name.toLowerCase().includes("patrolling limit") || name.toLowerCase().includes("tech attended in last hours") || name.toLowerCase().includes("tech attended in last days") ||
      name.toLowerCase().includes("password wait") || name.toLowerCase().includes("wait for restore") || name.toLowerCase().includes("wait for delivery confirmation") || name.toLowerCase().includes('requested quantity') || name.toLowerCase().includes('feedback delay') || name.toLowerCase().includes('arrival threshold count in28day') || name.toLowerCase().includes('phoneback service level ') || name.toLowerCase().includes('dispatch time service level') || name.toLowerCase().includes('finish time service level') ||
      name.toLowerCase().includes('new customer delay days') || name.toLowerCase().includes('individual with arrival days') || name.toLowerCase().includes('installation incubation days') || name.toLowerCase().includes('service incubation days') || name.toLowerCase().includes('installation escalation amount') || name.toLowerCase().includes('arrival threshold from') ||
      name.toLowerCase().includes('arrival threshold to') || name.toLowerCase().includes('threshold value') || name.toLowerCase().includes('measure 1') || name.toLowerCase().includes('measure 2') || name.toLowerCase().includes('measure 3') || name.toLowerCase().includes('break duration') || name.toLowerCase().includes('consecutive waivers') || name.toLowerCase().includes('standoff escalation minutes') || name.toLowerCase().includes('new decoder on site delay') || name.toLowerCase().includes('no signal hours') || name.toLowerCase().includes('days') ||
      name.toLowerCase().includes('check after reloggin period') || name.toLowerCase().includes('required qty') || name.toLowerCase().includes("virtual agent service pin") || name.toLowerCase().includes("virtual agent service password") || name.toLowerCase().includes("dis arming window") || name.toLowerCase().includes("arming window") || name.toLowerCase().includes("discount amount") || name.toLowerCase().includes("decimal") || name.toLowerCase().includes("min value") || name.toLowerCase().includes("max value") || name.toLowerCase().includes("recur every") || name.toLowerCase().includes("qty required")) ? "" : "";
    const minValue = (name.toLowerCase().includes("required quantity") || name.toLowerCase().includes("requested quantity")) ? actual : min;
    return `${name} should be greater than ${minValue} ${leadingWord}`;
  },

  max: ({ formControlName, max, actual }) => {
    const name: string = formControlName ? formControlName : "This field";
    const leadingWord = (name.toLowerCase().includes("no of levels") || name.toLowerCase().includes("start") || name.toLowerCase().includes("length") || name.toLowerCase().includes("port") || name.toLowerCase().includes('service arrival count') || name.toLowerCase().includes("tolerance level") || name.toLowerCase().includes("dis arming window") || name.toLowerCase().includes("arming window") || name.toLowerCase().includes("tech attended in last hours") || name.toLowerCase().includes("tech attended in last days") || name.toLowerCase().includes('new decoder on site delay') || name.toLowerCase().includes('no signal hours') || name.toLowerCase().includes('days') || name.toLowerCase().includes('phoneback service level ') || name.toLowerCase().includes('dispatch time service level') || name.toLowerCase().includes('finish time service level') ||
      name.toLowerCase().includes("minimum threshold") || name.toLowerCase().includes("warranty period") || name.toLowerCase().includes("max distance") || name.toLowerCase().includes("max count") || name.toLowerCase().includes("delay time") || name.toLowerCase().includes("time delay") || name.toLowerCase().includes("device moved distance") || name.toLowerCase().includes("patrol time") || name.toLowerCase().includes("rest time") || name.toLowerCase().includes("distance") || name.toLowerCase().includes("dispatch time") || name.toLowerCase().includes("time") || name.toLowerCase().includes("duration") || name.toLowerCase().includes("patrolling limit") || name.toLowerCase().includes("password wait") || name.toLowerCase().includes("wait for restore") || name.toLowerCase().includes("wait for delivery confirmation") || name.toLowerCase().includes('feedback delay') || name.toLowerCase().includes('arrival threshold count in28day') || name.toLowerCase().includes('new customer delay days') || name.toLowerCase().includes('individual with arrival days') || name.toLowerCase().includes('installation incubation days') || name.toLowerCase().includes('service incubation days') || name.toLowerCase().includes('installation escalation amount') || name.toLowerCase().includes('arrival threshold from') || name.toLowerCase().includes('arrival threshold to') || name.toLowerCase().includes('threshold value') || name.toLowerCase().includes('measure 1') || name.toLowerCase().includes('measure 2') || name.toLowerCase().includes('measure 3') || name.toLowerCase().includes('break duration') || name.toLowerCase().includes('consecutive waivers') || name.toLowerCase().includes('standoff escalation minutes') || name.toLowerCase().includes('check after reloggin period') || name.toLowerCase().includes("virtual agent service password") || name.toLowerCase().includes("virtual agent service pin") || name.toLowerCase().includes("discount amount") || name.toLowerCase().includes("decimal") || name.toLowerCase().includes("min value") || name.toLowerCase().includes("max value") || name.toLowerCase().includes("recur every") || name.toLowerCase().includes("scheme value")) ? "" : "";
    return `${name} should be lesser than ${max} ${leadingWord}`;
  },

  sum: ({ formControlName, max, actual }) => {
    const name: string = formControlName ? formControlName : "This field";
    return `${name} should be lesser than message length`;
  },

  lesserGreaterThan: ({ formControlName, comparewith, type }) => {
    const name: string = formControlName ? formControlName : 'This field';
    return `${name} should be ${type} than ${comparewith}`;
  },

  percentage: ({ formControlName }) => {
    const name: string = formControlName ? formControlName : 'This field';
    return `${name} has value in between the 0 to 100`;
  },

  checkdate: ({ formControlName }) => {
    const name: string = formControlName ? formControlName : 'This field';
    return `${name} is invalid date`;
  },

  checkminute: ({ formControlName }) => {
    const name: string = formControlName ? formControlName : 'This field';
    return `${name} is invalid minute`;
  },

  checkhour: ({ formControlName }) => {
    const name: string = formControlName ? formControlName : 'This field';
    return `${name} is invalid hour`;
  },

  checksec: ({ formControlName }) => {
    const name: string = formControlName ? formControlName : 'This field';
    return `${name} is invalid second`;
  },

  owlDateTimeMin: ({ formControlName }) => {
    const name: string = formControlName ? formControlName : 'This field';
    return `${name} is invalid date/time`;
  },
};

export const FORM_ERRORS = new InjectionToken('FORM_ERRORS', {
  providedIn: 'root',
  factory: () => defaultErrors,
});
