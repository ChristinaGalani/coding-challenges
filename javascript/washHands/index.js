const challenge = require("./washHands");
const prompt = require("prompt-sync")();

const handWashingCount = prompt(
  "How many times do you wash your hands per day? "
);

const monthCount = prompt("For how many months now? ");

const noun = monthCount > 1 ? "months" : "month";

const totalHandWashingTime = challenge.washHands(handWashingCount, monthCount);

console.log(
  `Assuming that it takes 21 seconds to properly wash your hands, you spent ${totalHandWashingTime} in total washing your hands, the last ${monthCount} ${noun}`
);
