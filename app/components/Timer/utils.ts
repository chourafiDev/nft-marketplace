import dayjs from "dayjs";

export function getRemainingTimeUntilMSTimestamp(timestampMS: number) {
  const timestampDayjs = dayjs(timestampMS);
  const nowDayjs = dayjs();

  if (timestampDayjs.isBefore(nowDayjs)) {
    return { seconds: "00", minutes: "00", hours: "00", days: "00" };
  }

  return {
    seconds: getRemainingSeconds(nowDayjs, timestampDayjs),
    minutes: getRemainingMinuts(nowDayjs, timestampDayjs),
    hours: getRemainingHours(nowDayjs, timestampDayjs),
    days: getRemainingDays(nowDayjs, timestampDayjs),
  };
}

function getRemainingSeconds(nowDayjs: any, timestampDayjs: any) {
  //if we have 65s its means 1m 5 and we need to achieve 5 by (% 60)
  const seconds = timestampDayjs.diff(nowDayjs, "seconds") % 60;
  return padWithZero(seconds, 2);
}

function getRemainingMinuts(nowDayjs: any, timestampDayjs: any) {
  //if we have 65m its means 1h 5m and we need to achieve 5m by (% 60)
  const minutes = timestampDayjs.diff(nowDayjs, "minutes") % 60;
  return padWithZero(minutes, 2);
}

function getRemainingHours(nowDayjs: any, timestampDayjs: any) {
  //if we have 25 its means 1d 1h and we need to achieve 1h by (% 60)
  const hours = timestampDayjs.diff(nowDayjs, "hours") % 24;
  return padWithZero(hours, 2);
}

function getRemainingDays(nowDayjs: any, timestampDayjs: any) {
  const days = timestampDayjs.diff(nowDayjs, "days");
  return padWithZero(days, 2);
}

function padWithZero(number: number, minLength: number) {
  const numberString = number.toString();

  if (numberString.length >= minLength) return numberString;

  return "0".repeat(minLength - numberString.length) + numberString;
}
