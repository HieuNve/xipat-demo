export const formatDate = date => {
  console.log(date);
  if (date < 10) {
    return `0${date}`;
  }
  return date;
};
