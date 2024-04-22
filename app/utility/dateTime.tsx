import moment from 'moment';

export const stringToDateTimeObj = (
  dateTime,
  formate = 'YYYY/MM/DD hh:mm:ss',
) => {
  return moment(dateTime, formate);
};

export const formateDateTime = (dateTimeObj, formate = 'MMMM D, YYYY') => {
  return moment(dateTimeObj).format(formate);
};

export const isFutureDateTime = dateTimeObj => {
  const toDaye = moment(new Date());
  return toDaye.diff(dateTimeObj) < 0;
};

export const countDown = dateTimeObj => {
  return moment().startOf(dateTimeObj).fromNow();
};
