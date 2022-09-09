import { DateTime } from "luxon";

export const ConvertCentralTime = (weekday = 6, hour, minute = 0) =>
  DateTime.fromObject(
    {
      weekday,
      hour,
      minute,
    },
    { zone: "UTC-5" }
  ).setZone("local");

export const ConvertCentralTimeString = (
  weekday = 0,
  hour = 0,
  minute = 0,
  repeat = { weeks: 1 }
) => {
  let centralDate = ConvertCentralTime(weekday, hour, minute);
  if (DateTime.now() > centralDate) {
    centralDate = centralDate.plus(repeat);
  }
  const localDate = centralDate.toLocaleString({
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
  });
  const localTz = centralDate.toFormat("ZZZZ");
  return `${localDate} ${localTz}`;
};
