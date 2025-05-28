import { OperationsUtilsProps } from "./index";

export const Operations = (): {
  add: (props: OperationsUtilsProps) => number;
  subtract: (props: OperationsUtilsProps) => number;
  multiply: (props: OperationsUtilsProps) => number;
  divide: (props: OperationsUtilsProps) => number;
  modulus: (props: OperationsUtilsProps) => number;
  exponentiation: (props: OperationsUtilsProps) => number;
  power: (props: OperationsUtilsProps) => number;
  squareRoot: (props: OperationsUtilsProps) => number;
  absoluteValue: (props: OperationsUtilsProps) => number;
  cubeRoot: (props: OperationsUtilsProps) => number;
  round: (props: OperationsUtilsProps) => number;
  floor: (props: OperationsUtilsProps) => number;
  ceil: (props: OperationsUtilsProps) => number;
  truncate: (props: OperationsUtilsProps) => number;
  sin: (props: OperationsUtilsProps) => number;
  cos: (props: OperationsUtilsProps) => number;
  tan: (props: OperationsUtilsProps) => number;
  asin: (props: OperationsUtilsProps) => number;
  acos: (props: OperationsUtilsProps) => number;
  atan: (props: OperationsUtilsProps) => number;
  atan2: (props: OperationsUtilsProps) => number;
  log: (props: OperationsUtilsProps) => number;
  log10: (props: OperationsUtilsProps) => number;
  log2: (props: OperationsUtilsProps) => number;
  exp: (props: OperationsUtilsProps) => number;
  factorial: (props: OperationsUtilsProps) => number;
  min: (props: OperationsUtilsProps) => number;
  max: (props: OperationsUtilsProps) => number;
  random: (props: OperationsUtilsProps) => number;
  clamp: (props: OperationsUtilsProps) => number;
  isEven: (props: OperationsUtilsProps) => boolean;
  isOdd: (props: OperationsUtilsProps) => boolean;
  isPrime: (props: OperationsUtilsProps) => boolean;
  pi: (props: OperationsUtilsProps) => number;
  euler: (props: OperationsUtilsProps) => number;
  ln10: (props: OperationsUtilsProps) => number;
  ln2: (props: OperationsUtilsProps) => number;
  log10e: (props: OperationsUtilsProps) => number;
  log2e: (props: OperationsUtilsProps) => number;
  sqrt1: (props: OperationsUtilsProps) => number;
  sqrt2: (props: OperationsUtilsProps) => number;
  toDegrees: (props: OperationsUtilsProps) => number;
  toRadians: (props: OperationsUtilsProps) => number;
} => {
  function add({ a, b = 1 }: OperationsUtilsProps): number {
    return a + b;
  }

  function subtract({ a, b = 1 }: OperationsUtilsProps): number {
    return a - b;
  }

  function multiply({ a, b = 1 }: OperationsUtilsProps): number {
    return a * b;
  }

  function divide({ a, b = 1 }: OperationsUtilsProps): number {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return a / b;
  }
  function modulus({ a, b = 1 }: OperationsUtilsProps): number {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return a % b;
  }
  function exponentiation({ a, b = 1 }: OperationsUtilsProps): number {
    if (b < 0) {
      throw new Error("Exponentiation with negative exponent is not allowed");
    }
    return a ** b;
  }
  function power({ a, b = 1 }: OperationsUtilsProps): number {
    return Math.pow(a, b);
  }
  function squareRoot({ a }: OperationsUtilsProps): number {
    if (a < 0) {
      throw new Error("Square root of negative number is not allowed");
    }
    return Math.sqrt(a);
  }
  function absoluteValue({ a }: OperationsUtilsProps): number {
    return Math.abs(a);
  }

  function cubeRoot({ a }: OperationsUtilsProps): number {
    if (a < 0) throw new Error("Cube root of negative number is not allowed");

    return Math.cbrt(a);
  }

  function round({ a }: OperationsUtilsProps): number {
    return Math.round(a);
  }

  function floor({ a }: OperationsUtilsProps): number {
    return Math.floor(a);
  }
  function ceil({ a }: OperationsUtilsProps): number {
    return Math.ceil(a);
  }
  function truncate({ a }: OperationsUtilsProps): number {
    return Math.trunc(a);
  }

  function sin({ a }: OperationsUtilsProps): number {
    return Math.sin(a);
  }
  function cos({ a }: OperationsUtilsProps): number {
    return Math.cos(a);
  }
  function tan({ a }: OperationsUtilsProps): number {
    return Math.tan(a);
  }
  function asin({ a }: OperationsUtilsProps): number {
    if (a < -1 || a > 1) {
      throw new Error("Input for asin must be in the range [-1, 1]");
    }
    return Math.asin(a);
  }
  function acos({ a }: OperationsUtilsProps): number {
    if (a < -1 || a > 1) {
      throw new Error("Input for acos must be in the range [-1, 1]");
    }
    return Math.acos(a);
  }
  function atan({ a }: OperationsUtilsProps): number {
    return Math.atan(a);
  }
  function atan2({ a, b = 1 }: OperationsUtilsProps): number {
    return Math.atan2(a, b);
  }
  function log({ a, b = 1 }: OperationsUtilsProps): number {
    if (a <= 0 || b <= 0) {
      throw new Error("Logarithm base and value must be greater than zero");
    }
    return Math.log(a) / Math.log(b);
  }
  function log10({ a }: OperationsUtilsProps): number {
    if (a <= 0) {
      throw new Error("Logarithm base 10 must be greater than zero");
    }
    return Math.log10(a);
  }
  function log2({ a }: OperationsUtilsProps): number {
    if (a <= 0) {
      throw new Error("Logarithm base 2 must be greater than zero");
    }
    return Math.log2(a);
  }
  function exp({ a }: OperationsUtilsProps): number {
    return Math.exp(a);
  }
  function factorial({ a }: OperationsUtilsProps): number {
    if (a < 0) {
      throw new Error("Factorial is not defined for negative numbers");
    }
    if (a === 0 || a === 1) {
      return 1;
    }
    let result = 1;
    for (let i = 2; i <= a; i++) {
      result *= i;
    }
    return result;
  }

  function min({ a, b = 1 }: OperationsUtilsProps): number {
    return Math.min(a, b);
  }

  function max({ a, b = 1 }: OperationsUtilsProps): number {
    return Math.max(a, b);
  }

  function random({ a, b = 1 }: OperationsUtilsProps): number {
    if (a >= b) {
      throw new Error("Invalid range for random number generation");
    }
    return Math.random() * (b - a) + a;
  }
  function clamp({ a, b = 1 }: OperationsUtilsProps): number {
    if (a > b) {
      throw new Error("Invalid range for clamping");
    }
    return Math.max(a, Math.min(b, a));
  }
  function isEven({ a }: OperationsUtilsProps): boolean {
    return a % 2 === 0;
  }
  function isOdd({ a }: OperationsUtilsProps): boolean {
    return a % 2 !== 0;
  }
  function isPrime({ a }: OperationsUtilsProps): boolean {
    if (a <= 1) return false;
    for (let i = 2; i <= Math.sqrt(a); i++) {
      if (a % i === 0) return false;
    }
    return true;
  }
  function pi({ a }: OperationsUtilsProps): number {
    return Math.PI;
  }
  function euler({ a }: OperationsUtilsProps): number {
    return Math.E;
  }
  function ln10({ a }: OperationsUtilsProps): number {
    return Math.LN10;
  }
  function ln2({ a }: OperationsUtilsProps) {
    return Math.LN2;
  }
  function log10e({ a }: OperationsUtilsProps): number {
    return Math.LOG10E;
  }
  function log2e({ a }: OperationsUtilsProps): number {
    return Math.LOG2E;
  }

  function sqrt1({ a }: OperationsUtilsProps): number {
    if (a < 0) {
      throw new Error("Square root of negative number is not allowed");
    }
    return Math.SQRT1_2;
  }
  function sqrt2({ a }: OperationsUtilsProps): number {
    if (a < 0) {
      throw new Error("Square root of negative number is not allowed");
    }
    return Math.SQRT2;
  }
  function toDegrees({ a }: OperationsUtilsProps): number {
    return (a * 180) / Math.PI;
  }
  function toRadians({ a }: OperationsUtilsProps): number {
    return (a * Math.PI) / 180;
  }

  return {
    add,
    subtract,
    multiply,
    divide,
    modulus,
    exponentiation,
    power,
    squareRoot,
    absoluteValue,
    cubeRoot,
    round,
    floor,
    ceil,
    truncate,
    sin,
    cos,
    tan,
    asin,
    acos,
    atan,
    atan2,
    log,
    log10,
    log2,
    exp,
    factorial,
    min,
    max,
    random,
    clamp,
    isEven,
    isOdd,
    isPrime,
    pi,
    euler,
    ln10,
    ln2,
    log10e,
    log2e,
    sqrt1,
    sqrt2,
    toDegrees,
    toRadians,
  };
};
