export function DateForToday() {
  const dateNow = new Date();
  const year = dateNow.getFullYear();
  const month = dateNow.getMonth() + 1;
  const day = dateNow.getDate();
  const yearMonthDay = `${year}.${month}.${day}`;
  return yearMonthDay;
}
