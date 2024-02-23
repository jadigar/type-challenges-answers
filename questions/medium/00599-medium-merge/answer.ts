/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type Merge<T = Record<string, unknown>, S = Record<string, unknown>> = {
  [k in keyof S | keyof T]: k extends keyof S
    ? S[k]
    : k extends keyof T
      ? T[k]
      : never;
};

type Merge2<F, S> = {
  [k in keyof F | keyof S]: k extends keyof S
    ? S[k]
    : k extends keyof F
      ? F[k]
      : never;
};

type Merge3<T = Record<string, unknown>, S = Record<string, unknown>> = {
  [k in keyof (S & T)]: k extends keyof S ? S[k] : (S & T)[k]
};

type Check1 = Merge<Foo, Bar>;
//      ^?

interface Foo {
  a: number;
  b: string;
}
interface Bar {
  b: number;
  c: boolean;
}

type Cases = [
  Expect<Equal<Merge<Foo, Bar>, {
    a: number;
    b: number;
    c: boolean;
  }>>,
  Expect<Equal<Merge2<Foo, Bar>, {
    a: number;
    b: number;
    c: boolean;
  }>>,
  Expect<Equal<Merge3<Foo, Bar>, {
    a: number;
    b: number;
    c: boolean;
  }>>,
];
