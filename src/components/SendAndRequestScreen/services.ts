export const checkIfUserHasEnoughBalance = (
  amount: number,
  balance: number,
) => {
  if (amount > balance) {
    return false;
  }
  return true;
};

export const checkAmountForDisable = (amount: number) => {
  if (amount <= 0) {
    return true;
  }
  return false;
};
