import { isEmailValid, normalizeEmail, isDisposableEmail } from "../src/index";

describe("Email Utils", () => {
  it("should validate correct email", () => {
    expect(isEmailValid({ email: "test@example.com" })).toBe(true);
  });
  it("should invalidate incorrect email", () => {
    expect(isEmailValid({ email: "test@" })).toBe(false);
  });

  it("should normalize email", () => {
    expect(normalizeEmail({ email: " TEST@Example.com " })).toBe(
      "test@example.com"
    );
  });

  it("should detect disposabel emails", () => {
    expect(isDisposableEmail({ email: "test@mailinator.com" })).toBe(true);
    expect(isDisposableEmail({ email: "test@example.com" })).toBe(false);
  });
});
