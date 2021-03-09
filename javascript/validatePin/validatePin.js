/**
 * A function that tests if a string is a valid pin or not.
 * A valid pin has:
 * Exactly 4 or 6 characters.
 * Only numerical characters (0-9).
 * No whitespace.
 *
 * @param {string} pin - number of times a person washes their hands per day
 */

const validatePin = (pin) => {
  const controlRegEx = new RegExp(/^([\d]{4}|[\d]{6})$/);
  return controlRegEx.test(pin);
};

module.exports.validatePin = validatePin;
