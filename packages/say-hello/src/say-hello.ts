import { SayHelloProps } from "./types";

export function sayHello({ firstName, lastName, age }: SayHelloProps) {
  console.log("Hello");
  console.log(`Your first name is ${firstName}`);

  if (lastName) {
    console.log(`Your last name is ${lastName}`);
  }

  if (age) console.log(`Your age is ${age}`);
}
