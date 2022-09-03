/*
 * https://www.hackerrank.com/challenges/bon-appetit
 */

export function bonAppetit(bill, k, b) {
  const annaEated = bill.reduce((amount, num, index) => {
    if (index === k) return amount;

    return amount + num;
  }, 0);

  if (b === annaEated / 2) {
    return 'Bon Appetit';
  }

  return b - annaEated / 2;
}
