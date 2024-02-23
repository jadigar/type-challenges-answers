/* _____________ Test Cases _____________ */
import type { Alike, Expect } from '@type-challenges/utils';

interface Chainable<T = Record<string, never>> {
  option: <K extends string, V>(key: K, value: V) => K extends keyof T ? Chainable<Record<K, V>> : Chainable<Record<K, V> & T>;
  get: () => T;
}

declare const a: Chainable;

const result1 = a
  .option('foo', 123)
  .option('bar', { value: 'Hello World' })
  .option('name', 'type-challenges')
  .get();

const result2 = a
  .option('name', 'another name')
  .option('name', 'last name')
  .get();

const result3 = a
  .option('name', 'another name')
  .option('name', 123)
  .get();

type Cases = [
  Expect<Alike<typeof result1, Expected1>>,
  Expect<Alike<typeof result2, Expected2>>,
  Expect<Alike<typeof result3, Expected3>>,
];
const check1 = result1;
const check2 = result2;
const check3 = result3;

interface Expected1 {
  foo: number;
  bar: {
    value: string;
  };
  name: string;
}

interface Expected2 {
  name: string;
}

interface Expected3 {
  name: number;
}
