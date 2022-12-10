// new Date(timestamp)
// new Date(year, month, day)

function createDate(timestamp: number): Date;
function createDate(day: number, month: number, year: number): Date;

function createDate(dayOrTimestamp: number, month?: number, year?: number) {
  return month === undefined || year === undefined
    ? new Date(dayOrTimestamp)
    : new Date(year, month, dayOrTimestamp);
}
