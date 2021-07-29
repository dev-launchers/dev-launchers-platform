import { DateTime } from "luxon";

export const ConvertCentralTime = (weekday = 6, hour, minute = 0) =>
  DateTime.fromObject({
    weekday,
    hour,
    minute,
    zone: "UTC-5",
  }).setZone("local");
