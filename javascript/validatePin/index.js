const challenge = require("./validatePin");
const prompt = require("prompt-sync")();

const pinInput = prompt("Please input a string to check if it's a valid pin ");

const valid = challenge.validatePin(pinInput);

const control = valid ? "valid" : "invalid";

console.log(`Your pin is ${control}`);
