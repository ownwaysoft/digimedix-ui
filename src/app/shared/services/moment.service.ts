import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class MomentService {

  constructor() { }


  convertNormalToRailayTime(date:any) {
    return moment(date, ["h:mm A"]).format("HH:mm:ss");
  }

  convertRailayToNormalTime(date:any) {
    return moment(date, ["HH.mm"]).format("hh:mm a");
  }

  convertNormalToRailayTimeOnly(time:any) {
    return moment(time, '"hh:mm A"').format("HH:mm")

  }

  convertRailayToNormalTimeOnly(time:any) {
    return moment(time, '"hh:mm"').format("hh:mm a")

  }

  addSeconds(time:any, minutes:any) { // 1 minute added
    return moment(time, 'h:mm A').add(minutes, 'minutes').format("hh:mm a");
  }

  removeSeconds(date:any) {
    return moment(date, ["HH:mm"]).format("HH:mm");
  }

  addMinits(day:any, minutes:any) { //  minute added
    return moment(day).add(minutes, 'minutes').format();
  }

  addHoursMinits(day:any, hours:any, minutes:any) { //  minute added
    return moment(day).add(hours, 'hours').add(minutes, 'minutes').format();
  }

  removeMinits(day:any, minutes:any) { //  minute added
    return moment(day).subtract(minutes, 'minutes').format();
  }

  removeHoursMinits(day:any, hours:any, minutes:any) { //  minute added
    return moment(day).subtract(hours, 'hours').add(minutes, 'minutes').format();
  }

  localToUTC(date:any) {
    // return moment(date).utc().format();
    return moment(date).format('YYYY-MM-DD');
  }

  localToUTCDateTime(date:any) {
    return moment(date).format('YYYY-MM-DD');
    // return moment(date).format('YYYY-MM-DD h:mm:ss a');
  }

  toUTCDateTime(date:any) {
    return moment(date).utc();
    // return moment(date).format('YYYY-MM-DD h:mm:ss a');
  }

  convertToUTC(date:any) {

    return moment.utc(moment(date)).format()  // pass to utc
  }

  toDateTime(date:any) {
    return moment(date).format('YYYY-MM-DD h:mm:ss a');
  }

  toFormateType(date:any, type:any) {
    return moment(date).format(type);

  }

  toFormat(date:any) {
    return moment(date).format()
  }

  toHoursMints12(date:any) {
    return moment(date).format('h:mm a');
  }

  toHoursMints24(date:any) {
    return moment(date).format('HH:mm');
  }

  timeDiff(fromTime:any, toTime:any) {
    let fromTime1 = moment(fromTime, "HH:mm:ss a")
    let toTime1 = moment(toTime, "HH:mm:ss a")
    // return toTime1.diff(fromTime1, 'hours')
    let diff = moment.duration(fromTime1.diff(toTime1));
    // let ck = [diff.asHours(), diff.minutes(), diff.seconds()].join(':')
    if (diff.asHours() < 0 || diff.minutes() < 0) {
      return false
    } else {
      return true
    }
    // return moment(fromTime).isAfter(toTime);
  }

  timeDuration(fromTime:any, toTime:any) { //'13:00:10'
    var startTime = moment(fromTime, 'hh:mm:ss a');
    var endTime = moment(toTime, 'hh:mm:ss a');
    var totalHours = (endTime.diff(startTime, 'hours'));
    var totalMinutes = endTime.diff(startTime, 'minutes');
    var clearMinutes = totalMinutes % 60;
    if (totalHours < 0 || clearMinutes < 0) {
      return false
    } else {
      return true
    }
  }

  getTimeDiff(fromTime:any, toTime:any) {
    let fromTime1 = moment(fromTime, "HH:mm:ss a")
    let toTime1 = moment(toTime, "HH:mm:ss a")
    // return toTime1.diff(fromTime1, 'hours')
    let diff = moment.duration(toTime1.diff(fromTime1));
    // let ck = [diff.asHours(), diff.minutes(), diff.seconds()].join(':')
    let hours = String(Math.round(diff.hours())).padStart(2, '0');
    let minutes = String(diff.minutes()).padStart(2, '0');
    return hours + ":" + minutes + ":00"

  }

  asMinutes(time:any) { //HH:mm
    moment.duration(time).asMinutes()

  }

  toMoment(date:any) {
    return moment(date);
  }

  // getLongMonthsList() {
  //   let months = moment.months().map(function (e, index) {
  //     let i = index + 1
  //     return { id: i, displayName: e };
  //   });
  //   return months
  // }

  // getShortMonthsList() {
  //   let months = moment.monthsShort().map(function (e, index) {
  //     let i = index + 1
  //     return { id: i, displayName: e };
  //   });
  //   return months
  // }

  getYesterday() {
    return moment().subtract(1, 'days').format()
  }

  isDateValid(date:any) {
    return moment(date).isValid()
  }

  setTime(time:any) {
    let spltime = time.split(':')

    // return moment().set({"hour": spltime[0], "minute": spltime[1]}).format()
    return new Date(moment().set({ "hour": spltime[0], "minute": spltime[1] }).format())
  }

  setTimetoRequieredDate(date:any, time:any) {
    let spltime = time.split(':')

    // return moment().set({"hour": spltime[0], "minute": spltime[1]}).format()
    return new Date(moment(date).set({ "hour": spltime[0], "minute": spltime[1] }).format())
  }

  convertTwelveToTwentyFourTime(d:any) {
    var dt = moment(d, ["h:mm A"]).format("HH:mm");
    return dt
  }


  addSevenDaysInCurrentDate(event:any, dayName:any) {
    var nxtDay = moment(event, "DD-MM-YYYY").add(7, 'days').day(dayName);
    var getDate = new Date(nxtDay.format());
    return getDate
  }

  isSameDay(fromDate:any, toDate:any) {
    return moment(fromDate).isSame(toDate, 'day');
  }

  isSameDayTime(fromDate:any, toDate:any) {
    return moment(fromDate).isSame(toDate);
  }

  betWeenTime(startTime:any, endTime:any, selectedTime:any) {
    // var time = moment() gives you current time. no format required.
    var time = moment(selectedTime, 'hh:mm:ss'),
      beforeTime = moment(startTime, 'hh:mm:ss'),
      afterTime = moment(endTime, 'hh:mm:ss');

    if (time.isBetween(beforeTime, afterTime)) {

      return true
    } else {

      return false
    }
  }

  betWeenDateTime(startTime:any, endTime:any, selectedTime:any) {
    // var time = moment() gives you current time. no format required.
    let time1 = moment(selectedTime).format('YYYY-MM-DD'),
      beforeTime1 = moment(startTime).format('YYYY-MM-DD'),
      afterTime1 = moment(endTime).format('YYYY-MM-DD');
    var time = moment(selectedTime, 'hh:mm'),
      beforeTime = moment(startTime, 'hh:mm'),
      afterTime = moment(endTime, 'hh:mm');

    // if (moment(selectedTime).format('YYYY-MM-DD').isBetween(beforeTime1, afterTime1)) {
    //   return true
    // } else {
    //   return false
    // }
    if (time.isBetween(beforeTime, afterTime)) {
      return true
    } else {

      return false
    }
  }

  isBefore(selectedDate:any) {
    return moment(selectedDate).isAfter(new Date());
  }

  isAfter(selectedDate:any) {
    return moment(selectedDate).isAfter(new Date());
  }

  addDays(selectedDay:any, numberOfDays:any) {
    return moment(selectedDay, "DD-MM-YYYY").add(numberOfDays, 'days');
  }

  addMinutes(selectedDay:any, numberOdMinutes:any) {
    return moment(selectedDay).add(numberOdMinutes, "minutes").format()
  }

  reduceMinutes(selectedDay:any, numberOdMinutes:any) {
    return moment(selectedDay).subtract(numberOdMinutes, "minutes").format()
  }

  addDaysWithFormate(selectedDay:any, numberOfDays:any, formate:any) {
    return moment(selectedDay, formate).add(numberOfDays, 'days');
  }

  disableParticularDayonEveryweek(date?: any) {
    let days = date ? moment(date).day() : moment().day();
    let array = [0, 1, 2, 3, 4, 5, 6];
    let index = array.findIndex(x => x == days);
    if (index >= 0) {
      array.splice(index, 1);
    }
    return array;
  }

  stringToDateFormat(date:any, format:any) {
    return moment(date, format);
  }

  scrollCalenderByTime(time:any) {
    let times = time ? time : '09:00:00'
    let timeNumber = Number(times.split(':')[0])
    return timeNumber * 60 // 60 is not time , its appromimate height of the time slap
  }

}
