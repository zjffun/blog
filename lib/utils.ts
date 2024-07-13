export function getTime(date: string | number | Date) {
  const time = new Date(date).getTime();

  if (time) {
    return time;
  }

  return 0;
}
