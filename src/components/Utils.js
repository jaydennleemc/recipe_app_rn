export const timeConvert = (n) => {
  let num = n;
  let hours = (num / 60);
  let rhours = Math.floor(hours);
  let minutes = (hours - rhours) * 60;
  let rminutes = Math.round(minutes);

  if (rminutes > 0) {
    return hours + 'h' + rminutes + 'm';
  }
  return hours + 'h';
};
