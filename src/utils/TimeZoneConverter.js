import { DateTime } from "luxon";

export const ConvertCentralTime = (hour, minute = 0) => {
  return DateTime.fromObject({
    weekday: 6,
    hour,
    minute,
    zone: "UTC-5"
  }).toLocal();
};
