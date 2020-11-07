const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const monthNameFormDate = (date: Date) => monthNames[date.getMonth()];

export const formatDate = (date: Date | string) =>
  new Date(date).toLocaleDateString();
