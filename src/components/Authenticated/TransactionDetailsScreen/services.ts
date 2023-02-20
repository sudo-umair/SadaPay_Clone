import {IMonths} from '../HomeScreen/Types';

export const MONTHS: IMonths = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December',
};

export const dateTimeFormatter = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const ampm = hours < 12 || hours === 24 ? 'AM' : 'PM';
  const hour = hours % 12 || 12;

  return `${day} ${MONTHS[month]} ${year}, ${hour}:${minutes} ${ampm}`;
};
