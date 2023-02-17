import {IMonths} from './Types';

export const MONTHS: IMonths = {
  0: 'Jan',
  1: 'Feb',
  2: 'Mar',
  3: 'Apr',
  4: 'May',
  5: 'Jun',
  6: 'Jul',
  7: 'Aug',
  8: 'Sep',
  9: 'Oct',
  10: 'Nov',
  11: 'Dec',
};

export const dateFormatter = (dateString: string) => {
  const date = new Date(dateString);
  const today = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const todayYear = today.getFullYear();
  if (year !== todayYear) {
    return `${MONTHS[month]} ${day}, ${year}`;
  }
  return `${MONTHS[month]} ${day}`;
};

export const timeFormatter = (dateString: string) => {
  const date = new Date(dateString);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const hours12 = hours % 12 || 12;
  const ampm = hours < 12 || hours === 24 ? 'AM' : 'PM';
  return `${hours12}:${minutes} ${ampm}`;
};

export const transactionFormatter = (
  type: 'incoming' | 'outgoing',
  amount: number,
) => {
  return `${type === 'incoming' ? '+' : '-'} Rs. ${amount}`;
};

export const iconFormatter = (type: 'incoming' | 'outgoing') => {
  return type === 'incoming'
    ? 'arrow-bottom-left-bold-outline'
    : 'arrow-top-right-bold-outline';
};

export const iconColorFormatter = (type: 'incoming' | 'outgoing') => {
  return type === 'incoming' ? '#27AE60' : '#EB5757';
};
