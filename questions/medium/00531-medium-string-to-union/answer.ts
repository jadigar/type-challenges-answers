/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type Split<S extends string> = (S extends ''
  ? []
  : S extends `${infer C}${infer R}`
    ? [ C, ...Split<R> ]
    : never);
type StringToUnion<S extends string> = TupleToUnion<Split<S>>;
type TupleToUnion<T extends unknown[]> = T[number];

type StrintToUnionSmart<T extends string> = T extends `${infer Letter}${infer Rest}`
  ? Letter | StrintToUnionSmart<Rest>
  : never;

type Check1 = StringToUnion<'hello'>;
//      ^?
type Check2 = StrintToUnionSmart<'hello'>;
//      ^?

type Cases = [
  Expect<Equal<StringToUnion<'AAA'>, 'A'>>,
  Expect<Equal<StringToUnion<''>, never>>,
  Expect<Equal<StringToUnion<'t'>, 't'>>,
  Expect<Equal<StringToUnion<'hello'>, 'e' | 'h' | 'l' | 'o'>>,
  Expect<Equal<StringToUnion<'coronavirus'>, 'a' | 'c' | 'i' | 'n' | 'o' | 'r' | 's' | 'u' | 'v'>>,

  Expect<Equal<StrintToUnionSmart<'AAA'>, 'A'>>,
  Expect<Equal<StrintToUnionSmart<''>, never>>,
  Expect<Equal<StrintToUnionSmart<'t'>, 't'>>,
  Expect<Equal<StrintToUnionSmart<'hello'>, 'e' | 'h' | 'l' | 'o'>>,
  Expect<Equal<StrintToUnionSmart<'coronavirus'>, 'a' | 'c' | 'i' | 'n' | 'o' | 'r' | 's' | 'u' | 'v'>>,
];
