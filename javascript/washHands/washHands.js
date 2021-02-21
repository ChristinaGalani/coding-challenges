/**
 * A function that takes the number of times a person washes their hands per day (N) and the number of months they follow this routine (nM) and calculates the duration in minutes and seconds that person spends washing their hands.
 *
 * @param {number} N - number of times a person washes their hands per day
 * @param {number} nM - number of months
 */

const washHands = (N, nM) => {
  const properHandWashing = 21;
  const dailyHandWashing = N * properHandWashing;
  const monthlyHandWashing = dailyHandWashing * nM * 30;
  const min = Math.floor(monthlyHandWashing / 60);
  const sec = monthlyHandWashing % 60;
  const totalHandWashingTime = `${min} minutes and ${sec} seconds`;
  return totalHandWashingTime;
};

module.exports.washHands = washHands;
