const challenge = require("../validatePin");

describe("the validatePin function", () => {
  it("decides that the pin '1234' is valid", () => {
    expect(challenge.validatePin("1234")).toBe(true);
  });
  it("decides that the pin '45135' is invalid", () => {
    expect(challenge.validatePin("45135")).toBe(false);
  });
  it("decides that the pin '89abc1' is valid", () => {
    expect(challenge.validatePin("89abc1")).toBe(false);
  });
  it("decides that the pin '900876' is valid", () => {
    expect(challenge.validatePin("900876")).toBe(true);
  });
  it("decides that the pin ' 4983' is valid", () => {
    expect(challenge.validatePin(" 4983")).toBe(false);
  });
});
