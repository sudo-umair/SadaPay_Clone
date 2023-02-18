export const currencyFormatter = (value: number) => {
  return new Intl.NumberFormat('en-PK', {
    style: 'currency',
    currency: 'PKR',
    minimumFractionDigits: 0,
  }).format(value);
};

export const phoneNumberFormatter = (value: string) => {
  const countryCode = value.slice(0, 2);
  const operator = value.slice(2, 5);
  const number = value.slice(5, 13);

  return `+${countryCode}-${operator}-${number}`;
};
