import { DateTime, Interval } from 'luxon';

export function format_time_created_at(value: string) {
  // format: 2050-11-20 18:32:47 +0000
  const created = DateTime.fromJSDate(new Date(value));
  const now = DateTime.now();
  const diff_mins = now.diff(created, 'minutes').toObject().minutes;
  const diff_hours = now.diff(created, 'hours').toObject().hours;
  console.log(diff_hours, diff_mins);

  if (diff_hours > 24.0) {
    return created.toFormat('LLL L');
  } else if (diff_hours < 24.0 && diff_hours > 1.0) {
    return `${Math.floor(diff_hours)}h`;
  } else if (diff_hours < 1.0) {
    return `${Math.round(diff_mins)}m`;
  }
}

export function anotherDifference(dateTime: string) {
  const start = DateTime.fromJSDate(new Date(dateTime));
  const now = DateTime.now();
  console.log('start:', start.toISO());
  console.log('now:', now.toISO());
  const i = Interval.fromDateTimes(start, now);

  console.log('Interval:', i.count('seconds'), 'seconds');
  return i.length('hours');
}
