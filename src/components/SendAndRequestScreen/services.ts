export const checkIfUserHasEnoughBalance = async (
  amount: number,
  balance: number,
) => {
  if (amount > balance) {
    return false;
  }
  return true;
};
