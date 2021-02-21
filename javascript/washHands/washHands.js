const washHands = (N, nM) => {
  const properHandWashing = 21;
  const dailyHandWashing = N * properHandWashing;
  const monthlyHandWashing = dailyHandWashing * nM * 30;
  const min = Math.floor(monthlyHandWashing / 60);
  const sec = monthlyHandWashing % 60;
  const totalHandWashingTime = `${min} minutes and ${sec} seconds`;
  return totalHandWashingTime;
};

console.log(washHands(8, 7));

module.exports.washHands = washHands;