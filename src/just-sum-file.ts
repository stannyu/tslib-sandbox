import { Cl } from './cl';

/**
 * @Method return sum of two numbers.
 * @param a {number}
 * @param b {number}
 */
export function justSumNums(a: number, b: number): number {
  Cl.clMethod();
  return a + b;
}

export function sayHello() {
  console.log('hi');
}
