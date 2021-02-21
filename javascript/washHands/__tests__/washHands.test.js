const challenge = require("../washHands");

describe("the washHands function", () => {
  it("calculates the minutes and seconds of the total handwashing time in a month when whashing hands 8 times a day for 7 months", () => {
    expect(challenge.washHands(8, 7)).toBe("588 minutes and 0 seconds");
  });
  it("calculates the minutes and seconds of the total handwashing time in a month when whashing hands 0 times a day for 0 months", () => {
    expect(challenge.washHands(0, 0)).toBe("0 minutes and 0 seconds");
  });
  it("calculates the minutes and seconds of the total handwashing time in a month when whashing hands 7 times a day for 9 months", () => {
    expect(challenge.washHands(7, 9)).toBe("661 minutes and 30 seconds");
  });
});
