import { Operations } from "../src";
// import { OperationsUtilsProps } from "../src";

const ops = Operations();

describe("Operation Utility functions", () => {
  test("add", () => {
    expect(ops.add({ a: 4, b: 5 })).toBe(9);
  });

  test("subtract", () => {
    expect(ops.subtract({ a: 3, b: 1 })).toBe(2);
  });

  test("multiply", () => {
    expect(ops.multiply({ a: 3, b: 2 })).toBe(6);
  });
  test("divide", () => {
    expect(ops.divide({ a: 6, b: 2 })).toBe(3);
    expect(() => ops.divide({ a: 6, b: 0 })).toThrow(
      "Division by zero is not allowed"
    );
  });

  test("modulus", () => {
    expect(ops.modulus({ a: 7, b: 4 })).toBe(3);
    expect(() => ops.modulus({ a: 6, b: 0 })).toThrow(
      "Division by zero is not allowed"
    );
  });

  test("exponentiation", () => {
    expect(ops.exponentiation({ a: 2, b: 3 })).toBe(8);
    expect(() => ops.exponentiation({ a: 2, b: -1 })).toThrow();
  });

  test("power", () => {
    expect(ops.power({ a: 2, b: 3 })).toBe(8);
  });

  test("squareRoot", () => {
    expect(ops.squareRoot({ a: 9 })).toBe(3);
    expect(() => ops.squareRoot({ a: -4 })).toThrow();
  });

  test("absoluteValue", () => {
    expect(ops.absoluteValue({ a: -9 })).toBe(9);
  });

  test("cubeRoot", () => {
    expect(() => ops.cubeRoot({ a: -27 })).toThrow();
  });

  test("round", () => {
    expect(ops.round({ a: 4.6 })).toBe(5);
  });

  test("floor", () => {
    expect(ops.floor({ a: 4.9 })).toBe(4);
  });

  test("ceil", () => {
    expect(ops.ceil({ a: 4.1 })).toBe(5);
  });

  test("truncate", () => {
    expect(ops.truncate({ a: 4.9 })).toBe(4);
  });

  test("sin", () => {
    expect(ops.sin({ a: Math.PI / 2 })).toBeCloseTo(1);
  });

  test("cos", () => {
    expect(ops.cos({ a: 0 })).toBeCloseTo(1);
  });

  test("tan", () => {
    expect(ops.tan({ a: 0 })).toBeCloseTo(0);
  });

  test("asin", () => {
    expect(ops.asin({ a: 1 })).toBeCloseTo(Math.PI / 2);
    expect(() => ops.asin({ a: 2 })).toThrow();
  });

  test("acos", () => {
    expect(ops.acos({ a: 1 })).toBeCloseTo(0);
    expect(() => ops.acos({ a: 2 })).toThrow();
  });

  test("atan", () => {
    expect(ops.atan({ a: 1 })).toBeCloseTo(Math.PI / 4);
  });

  test("atan2", () => {
    expect(ops.atan2({ a: 1, b: 1 })).toBeCloseTo(Math.PI / 4);
  });

  test("log", () => {
    expect(ops.log({ a: 8, b: 2 })).toBe(3);
    expect(() => ops.log({ a: -1, b: 2 })).toThrow();
  });

  test("log10", () => {
    expect(ops.log10({ a: 1000 })).toBe(3);
    expect(() => ops.log10({ a: 0 })).toThrow();
  });

  test("log2", () => {
    expect(ops.log2({ a: 8 })).toBe(3);
    expect(() => ops.log2({ a: 0 })).toThrow();
  });

  test("exp", () => {
    expect(ops.exp({ a: 1 })).toBeCloseTo(Math.E);
  });

  test("factorial", () => {
    expect(ops.factorial({ a: 5 })).toBe(120);
    expect(() => ops.factorial({ a: -1 })).toThrow();
  });

  test("min", () => {
    expect(ops.min({ a: 3, b: 9 })).toBe(3);
  });

  test("max", () => {
    expect(ops.max({ a: 3, b: 9 })).toBe(9);
  });

  test("random", () => {
    const result = ops.random({ a: 1, b: 2 });
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThan(2);
  });

  test("clamp", () => {
    expect(() => ops.clamp({ a: 5, b: 4 })).toThrow();
    expect(ops.clamp({ a: 3, b: 5 })).toBe(3);
  });

  test("isEven", () => {
    expect(ops.isEven({ a: 4 })).toBe(true);
    expect(ops.isEven({ a: 5 })).toBe(false);
  });

  test("isOdd", () => {
    expect(ops.isOdd({ a: 5 })).toBe(true);
    expect(ops.isOdd({ a: 4 })).toBe(false);
  });

  test("isPrime", () => {
    expect(ops.isPrime({ a: 2 })).toBe(true);
    expect(ops.isPrime({ a: 4 })).toBe(false);
  });

  test("pi", () => {
    expect(ops.pi({ a: 0 })).toBeCloseTo(Math.PI);
  });

  test("euler", () => {
    expect(ops.euler({ a: 0 })).toBeCloseTo(Math.E);
  });

  test("ln10", () => {
    expect(ops.ln10({ a: 0 })).toBeCloseTo(Math.LN10);
  });

  test("ln2", () => {
    expect(ops.ln2({ a: 0 })).toBeCloseTo(Math.LN2);
  });

  test("log10e", () => {
    expect(ops.log10e({ a: 0 })).toBeCloseTo(Math.LOG10E);
  });

  test("log2e", () => {
    expect(ops.log2e({ a: 0 })).toBeCloseTo(Math.LOG2E);
  });

  test("sqrt1", () => {
    expect(ops.sqrt1({ a: 1 })).toBeCloseTo(Math.SQRT1_2);
  });

  test("sqrt2", () => {
    expect(ops.sqrt2({ a: 1 })).toBeCloseTo(Math.SQRT2);
  });

  test("toDegrees", () => {
    expect(ops.toDegrees({ a: Math.PI })).toBeCloseTo(180);
  });

  test("toRadians", () => {
    expect(ops.toRadians({ a: 180 })).toBeCloseTo(Math.PI);
  });
});
